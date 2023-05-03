<!--/////////////////////////////////////////////////////////////////
// Types definitions
//////////////////////////////////////////////////////////////////-->
<!-- <script lang="ts" context="module">
	declare type MarqueeckOptions = {
		speed?: number;
		direction?: 'left' | 'right';
		gap?: number;
		paddingX_Wrapper?: number;
		paddingY_Wrapper?: number;
		debug?: boolean;
		onHover?: 'none' | 'stop' | 'customSpeed';
		gradualHoverDuration?: number;
		hoverSpeed?: number;
		stickyPosition?: 'start' | 'end';
	};
</script> -->

<!--/////////////////////////////////////////////////////////////////
// JS Logic
//////////////////////////////////////////////////////////////////-->
<script lang="ts">
	import { writable } from 'svelte/store';
	import { tweened } from 'svelte/motion';
	import { quadInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';
	import { MarqueeckTranslate } from '$lib/MarqueeckTranslate.js';
	import type { MarqueeckOptions } from '$lib/MarqueeckOptions.js';

	// Initialize custom event dispatchers
	const dispatch = createEventDispatcher();
	const dispatchHoverInEvent = async () => {
		const data = {
			movingDistance: contentWidth + mergedOptions.gap
		};
		dispatch('hoverIn', data);
	};
	const dispatchHoverOutEvent = async () => dispatch('hoverOut');
	const dispatchClickEvent = async () => dispatch('click');

	// External arguments
	export let options: MarqueeckOptions = {},
		ribbonClasses = '', // Define classes for the repeating wrapper
		childClasses = '', // Define classes for the repeated content
		stickElClasses = '', // Define classes for the sticky element
		hoverClasses = ''; // Define wrapper classes when hovered

	let wrapperWidth: number, wrapperHeight: number, contentWidth: number, contentHeight: number;
	let extendContentby = 3; // Number of elements to add to always overflow the parent
	let DefaultPlaceHolder = 'Marqueeck component';

	const defaultOptions = {
		speed: 50,
		direction: 'left',
		gap: 20,
		paddingX_Wrapper: 20,
		paddingY_Wrapper: 16,
		debug: false,
		onHover: 'customSpeed',
		gradualHoverDuration: 1250,
		hoverSpeed: 10,
		stickyPosition: 'start'
	};

	// Merge options with defaultOptions
	const mergedOptions = { ...defaultOptions, ...options };
	const direction: 'left' | 'right' = mergedOptions.direction as 'left' | 'right';
	const stickyPosHelper = mergedOptions.stickyPosition === 'start' ? 'left: 0;' : 'right: 0;';

	// Define a tweened value for the speed, can be passed to MarqueeckTranslate() as currentSpeed
	const tweenedSpeed = tweened(mergedOptions.speed, {
		duration: mergedOptions.gradualHoverDuration,
		easing: quadInOut
	});

	// Define a Boolean for onHover options state
	const noHoverState =
		mergedOptions.onHover === 'stop' || mergedOptions.onHover === 'customSpeed' ? true : false;

	// Define a Boolean for mouse hover state
	const isMouseIn = writable(false);
	$: reactiveHoverClasses = $isMouseIn ? hoverClasses : '';

	// Get the width of the wrapper without it paddings
	$: wrapperInnerWidth = wrapperWidth - 2 * mergedOptions.paddingX_Wrapper;
	// Define the number of elements needed to fill the wrapper
	$: contentNumber =
		Math.ceil(wrapperInnerWidth / (contentWidth + mergedOptions.gap)) + extendContentby;

	// Event listeners handlers
	const handleMouseEnter = async () => {
		if (noHoverState) {
			if (mergedOptions.debug) console.log('▶️ hover in');
			isMouseIn.set(true);
			await dispatchHoverInEvent();

			if (mergedOptions.onHover === 'customSpeed') {
				await tweenedSpeed.update(() => mergedOptions.hoverSpeed);
			} else {
				await tweenedSpeed.update(() => 0);
			}
		}
	};

	const handleMouseLeave = async () => {
		if (noHoverState) {
			if (mergedOptions.debug) console.log('⏸️ hover out');
			isMouseIn.set(false);
			await dispatchHoverOutEvent();
			await tweenedSpeed.update(() => mergedOptions.speed);
		}
	};

	const handleMouseClick = async () => {
		await dispatchClickEvent();
	};
</script>

<!--/////////////////////////////////////////////////////////////////
// HTML CONSTRUCT
//////////////////////////////////////////////////////////////////-->

<div
	class="marqueeck-wrapper {$$props.class ?? ''} {reactiveHoverClasses}"
	style:gap="{mergedOptions.gap}px"
	style:padding-inline="{mergedOptions.paddingX_Wrapper}px"
	style:padding-block="{mergedOptions.paddingY_Wrapper}px"
	style={$$props.style ?? ''}
	bind:offsetWidth={wrapperWidth}
	bind:offsetHeight={wrapperHeight}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	on:click={handleMouseClick}
	on:keydown={handleMouseClick}
>
	<div
		class="marqueeck-ribbon {ribbonClasses ?? ''}"
		use:MarqueeckTranslate={{
			direction: direction,
			distance: contentWidth + mergedOptions.gap,
			currentSpeed: () => $tweenedSpeed,
			isMouseIn: () => $isMouseIn
		}}
	>
		<!-- Put one element to get its size -->
		<span
			transition:fade
			class="marqueeck-child {childClasses ?? ''}"
			bind:offsetWidth={contentWidth}
			bind:offsetHeight={contentHeight}
		>
			<slot>{DefaultPlaceHolder}</slot>
		</span>

		<!-- Repeating content the necessary times -->
		{#each { length: contentNumber } as item, i}
			<span transition:fade class="marqueeck-child {childClasses ?? ''}">
				<slot>{DefaultPlaceHolder}</slot>
			</span>
		{/each}
	</div>

	<!-- Use sticky slot if provided -->
	{#if $$slots.sticky}
		<div
			class="marqueeck-sticky {stickElClasses ?? ''}"
			style:padding-inline="{mergedOptions.paddingX_Wrapper}px"
			style={stickyPosHelper}
		>
			<slot name="sticky" />
		</div>
	{/if}
</div>

{#if options.debug}
	<code class="marqueeck-log">
		<!-- <span>direction: {mergedOptions.direction}</span> -->
		<span>wrapperInnerWidth: {wrapperInnerWidth} px</span>
		<span>contentWidth: {contentWidth} px</span>
		<span>contentNumber: {contentNumber} elements</span>
		<span>tweenedSpeed: {Math.round($tweenedSpeed)} ms/sec</span>
		<span>isMouseIn: {$isMouseIn}</span>
		<span>reactiveHoverClasses: {reactiveHoverClasses}</span>
	</code>
{/if}

<!--/////////////////////////////////////////////////////////////////
// Default styles
//////////////////////////////////////////////////////////////////-->
<style>
	.marqueeck-wrapper {
		width: 100%;
		background-color: var(--bg-color, lightslategrey);
		color: var(--text-color, white);
		display: flex;
		flex-flow: row nowrap;
		overflow-x: hidden;
		position: relative;
	}

	.marqueeck-ribbon {
		display: inherit;
		flex-flow: inherit;
		gap: inherit;
		position: inherit;
	}

	.marqueeck-child {
		display: inline;
		width: max-content;
	}

	.marqueeck-sticky {
		position: absolute;
		background-color: var(--bg-color, lightslategrey);
		width: -moz-fit-content;
		width: fit-content;
	}

	.marqueeck-log {
		display: flex;
		flex-flow: column wrap;
		border: 1px solid lightslategrey;
		padding: 4px;
		margin-block: 8px;
		margin-inline: 8px;
		border-radius: 4px;
		width: -moz-fit-content;
		width: fit-content;
		font-size: 13px;
	}
</style>
