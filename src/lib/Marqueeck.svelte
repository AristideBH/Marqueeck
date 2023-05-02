<!--/////////////////////////////////////////////////////////////////
// Types definitions
//////////////////////////////////////////////////////////////////-->
<script lang="ts" context="module">
	export type MarqueeckOptions = {
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

	export type MarqueeckTranslateOptions = {
		direction: 'left' | 'right';
		distance: number;
		currentSpeed: () => number;
		isMouseIn: () => boolean;
	};
</script>

<!--/////////////////////////////////////////////////////////////////
// JS Logic
//////////////////////////////////////////////////////////////////-->
<script lang="ts">
	import { writable } from 'svelte/store';
	import { tweened } from 'svelte/motion';
	import { quadInOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';
	import { createEventDispatcher } from 'svelte';

	function MarqueeckTranslate(node: HTMLElement, options: MarqueeckTranslateOptions): void {
		const { direction, distance } = options;
		let currentX = -2 * distance,
			totalMoved = distance;
		const distanceToMove = Math.abs(distance);

		const loopTranslate = () => {
			if (direction === 'left') {
				currentX = 1 * (totalMoved % distance);
			} else {
				currentX = 1 * (totalMoved % distance) - distance;
			}
		};

		function update() {
			const currentSpeed = options.currentSpeed();
			currentX += direction === 'left' ? -currentSpeed / 60 : currentSpeed / 60;

			if (direction === 'left') {
				node.style.transform = `translateX(${-currentX}px)`;
				console.log('scrollleft');
			} else {
				node.style.transform = `translateX(${currentX}px)`;
				console.log('scrollright');
			}

			// Keep track of total distance moved
			totalMoved += Math.abs(currentSpeed) / 60;
			if (totalMoved >= distanceToMove) loopTranslate();

			requestAnimationFrame(update);
		}

		update();
	}

	// Initialize custom hover event
	const dispatch = createEventDispatcher();
	const displatchHoverEvent = async () => {
		const data = {
			movingDistance: contentWidth + mergedOptions.gap
		};
		dispatch('hover', data);
	};

	// External arguments
	export let options: MarqueeckOptions = {},
		contentClasses = '', // Define classes for the repeating wrapper
		elementClasses = '', // Define classes for the repeated content
		stickElClasses = ''; // Define classes for the sticky element

	let wrapperWidth: number, wrapperHeight: number, contentWidth: number, contentHeight: number;
	let extendContentby = 3; // Number of elements to add to always overflow the parent

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

	// Define a Boolean for mouse state
	const isMouseIn = writable(false);

	// Get the width of the wrapper without it paddings
	$: wrapperInnerWidth = wrapperWidth - 2 * mergedOptions.paddingX_Wrapper;
	// Define the number of elements needed to fill the wrapper
	$: contentNumber =
		Math.ceil(wrapperInnerWidth / (contentWidth + mergedOptions.gap)) + extendContentby;

	// Event listeners handlers
	const handleMouseEnter = async () => {
		if (noHoverState) {
			if (mergedOptions.debug) console.log('❇️');
			isMouseIn.set(true);
			await displatchHoverEvent();
			if (mergedOptions.onHover === 'customSpeed') {
				await tweenedSpeed.update(() => mergedOptions.hoverSpeed);
			} else {
				await tweenedSpeed.update(() => 0);
			}
		}
	};

	const handleMouseLeave = async () => {
		if (noHoverState) {
			if (mergedOptions.debug) console.log('⛔');
			isMouseIn.set(false);
			await tweenedSpeed.update(() => mergedOptions.speed);
		}
	};
</script>

<!--/////////////////////////////////////////////////////////////////
// HTML CONSTRUCT
//////////////////////////////////////////////////////////////////-->
<div
	class="marqueeck-wrapper {$$props.class ?? ''}"
	style:gap="{mergedOptions.gap}px"
	style:padding-inline="{mergedOptions.paddingX_Wrapper}px"
	style:padding-block="{mergedOptions.paddingY_Wrapper}px"
	style={$$props.style ?? ''}
	bind:offsetWidth={wrapperWidth}
	bind:offsetHeight={wrapperHeight}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
>
	<div
		class="marqueeck-content {contentClasses ?? ''}"
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
			class="marqueeck-child {elementClasses ?? ''}"
			bind:offsetWidth={contentWidth}
			bind:offsetHeight={contentHeight}
		>
			<slot>Marqueeck</slot>
		</span>

		<!-- Repeating content the necessary times -->
		{#each { length: contentNumber } as item, i}
			<span transition:fade class="Marqueeck-child {elementClasses ?? ''}">
				<slot>Marqueeck</slot>
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
		<span>direction: {mergedOptions.direction}</span>
		<span>wrapperInnerWidth: {wrapperInnerWidth} px</span>
		<span>contentWidth: {contentWidth} px</span>
		<span>contentNumber: {contentNumber} elements</span>
		<span>tweenedSpeed: {Math.round($tweenedSpeed)} ms/sec</span>
		<span>isMouseIn: {$isMouseIn}</span>
	</code>
{/if}

<!--/////////////////////////////////////////////////////////////////
// Default styles
//////////////////////////////////////////////////////////////////-->
<style>
	.marqueeck-wrapper {
		width: 100%;
		background: var(--bg-color, lightslategrey);
		color: var(--text-color, white);
		display: flex;
		flex-flow: row;
		flex-wrap: nowrap;
		overflow-x: hidden;
		position: relative;
	}

	.marqueeck-content {
		display: inherit;
		flex-flow: inherit;
		flex-wrap: inherit;
		gap: inherit;
		position: inherit;
	}

	span.marqueeck-child {
		display: inline;
		width: max-content;
	}

	.marqueeck-sticky {
		position: absolute;
		background: var(--bg-color, lightslategrey);
		width: -moz-fit-content;
		width: fit-content;
	}

	code.marqueeck-log {
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
