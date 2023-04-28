<!--/////////////////////////////////////////////////////////////////
// Types definitions
//////////////////////////////////////////////////////////////////-->
<script lang="ts" context="module">
	export type MarqueeOptions = {
		speed?: number;
		direction?: 'left' | 'right';
		gap?: number;
		paddingWrapper?: number;
		debug?: boolean;
		onHover?: 'none' | 'stop' | 'slow';
		gradualStopDuration?: number;
		minSpeed?: number;
	};
</script>

<!--/////////////////////////////////////////////////////////////////
// JS Logic
//////////////////////////////////////////////////////////////////-->
<script lang="ts">
	import { writable } from 'svelte/store';
	import { tweened } from 'svelte/motion';
	import { quadInOut } from 'svelte/easing';
	import { MarqueeTranslate } from '$lib/MarqueeTranslate.ts';

	export let wrapperClasses = '', // Define classes for the container
		contentClasses = '', // Define classes for the repeating wrapper
		elementClasses = ''; // Define classes for the repeated content

	const defaultOptions = {
		speed: 50,
		direction: 'left',
		gap: 20,
		paddingWrapper: 10,
		debug: false,
		onHover: 'slow',
		gradualStopDuration: 1250,
		minSpeed: 10
	};
	export let options: MarqueeOptions = {};

	// Merge options with defaultOptions
	const mergedOptions = { ...defaultOptions, ...options };

	const speed = mergedOptions.speed;
	const direction: 'left' | 'right' = mergedOptions.direction as 'left' | 'right';
	const gap = mergedOptions.gap;
	const paddingWrapper = mergedOptions.paddingWrapper;
	const debug = mergedOptions.debug;
	const onHover = mergedOptions.onHover;
	const gradualStopDuration = mergedOptions.gradualStopDuration;
	const minSpeed = mergedOptions.minSpeed;

	// Define a tweened value for the speed, can be passed to MarqueeTranslate() as currentSpeed
	const tweenedSpeed = tweened(speed, {
		duration: gradualStopDuration,
		easing: quadInOut
	});
	const noHoverState = onHover === 'stop' || onHover === 'slow' ? true : false;
	const isMouseIn = writable(false);

	let wrapperWidth: number, wrapperHeight: number, contentWidth: number, contentHeight: number;
	let extendContentby = 3; // Number of elements to add to always overflow the parent

	$: wrapperInnerWidth = wrapperWidth - 2 * paddingWrapper; // Get the width of the wrapper without it paddings
	$: contentNumber = Math.ceil(wrapperInnerWidth / (contentWidth + gap)) + extendContentby; // Define the number of elements needed to fill the wrapper

	const handleMouseEnter = async () => {
		if (noHoverState) {
			if (debug) {
				console.log('❇️');
			}
			isMouseIn.set(true);
			if (onHover === 'slow') {
				await tweenedSpeed.update(() => minSpeed);
			} else {
				await tweenedSpeed.update(() => 0);
			}
		}
	};

	const handleMouseLeave = async () => {
		if (noHoverState) {
			if (debug) {
				console.log('⛔');
			}
			isMouseIn.set(false);
			await tweenedSpeed.update(() => speed);
		}
	};

	if (debug) {
		console.clear();
	}
</script>

<!--/////////////////////////////////////////////////////////////////
// HTML CONSTRUCT
//////////////////////////////////////////////////////////////////-->
<div
	class="marquee-wrapper {wrapperClasses}"
	style:gap="{gap}px"
	style:padding-inline="{paddingWrapper}px"
	bind:offsetWidth={wrapperWidth}
	bind:offsetHeight={wrapperHeight}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
>
	<div
		class="marquee-content {contentClasses}"
		use:MarqueeTranslate={{
			direction,
			distance: contentWidth + gap,
			currentSpeed: () => $tweenedSpeed,
			isMouseIn: () => $isMouseIn
		}}
	>
		<!-- Put one element to get its size -->
		<span class={elementClasses} bind:offsetWidth={contentWidth} bind:offsetHeight={contentHeight}>
			<slot>Marquee</slot>
		</span>

		<!-- Repeating content the necessary times -->
		{#each { length: contentNumber } as item}
			<span class={elementClasses}>
				<slot>Marquee</slot>
			</span>
		{/each}
	</div>
</div>

{#if options.debug}
	<code class="debug">
		<div>direction: {direction}</div>
		<div>wrapperInnerWidth: {wrapperInnerWidth} px</div>
		<div>contentWidth: {contentWidth} px</div>
		<div>contentNumber: {contentNumber} elements</div>
		<div>tweenedSpeed: {Math.round($tweenedSpeed)} ms/sec</div>
		<div>isMouseIn: {$isMouseIn}</div>
	</code>
{/if}

<!--/////////////////////////////////////////////////////////////////
// Default styles
//////////////////////////////////////////////////////////////////-->
<style>
	.marquee-wrapper {
		--bg-color: #e8e8e8;
		--text-color: #fff:;
		width: 100%;
		background-color: var(--bg-color);
		color: var(--text-color);
		padding-block: 1em;
		display: flex;
		flex-flow: row;
		flex-wrap: nowrap;
		overflow-x: hidden;
	}

	.marquee-content {
		display: inherit;
		flex-flow: inherit;
		flex-wrap: inherit;
		gap: inherit;

	}

	span{
		display: inline-flex;
		width: max-content;
	}

	code.debug{
		display: flex;
		flex-flow: column wrap;
		border: 1px solid lightslategrey;
		padding:10px;
		margin-block:10px;
		margin-inline:10px;
		border-radius:4px;
		width: fit-content;
		font-size: 13px;
	}

</style>
