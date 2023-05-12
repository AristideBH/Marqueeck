<!--
@component
Marqueeck - A custom marquee component for Svelte
```tsx
type MarqueeckOptions = {
    speed: number;
    direction: 'left' | 'right';
    gap: number;
    onHover: 'none' | 'stop' | 'customSpeed';
    speedFactor: number;
    gradualHoverDuration: number;
    hoverSpeed: number;
    stickyPosition: 'start' | 'end';
    padding: { x: number; y: number };
    debug: boolean,
    easing: (t: number) => number
};
	```
-->
<script lang="ts">
	import { createEventDispatcher, onMount, onDestroy, tick } from 'svelte';
	// prettier-ignore
	import { hasHoverState, defaultOptions, isMouseIn, stickyPos, setOpacity, debugState } from './Marqueeck.js';
	import type { MarqueeckOptions, TranslateOptions } from './Marqueeck.js';
	import { tweened } from 'svelte/motion';
	import { fade } from 'svelte/transition';

	// VARIABLES
	let wrapperWidth: number, childWidth: number, childRef: HTMLElement;
	export let options: Partial<MarqueeckOptions> = {},
		ribbonRegion = '', // Define classes for the repeating wrapper
		childRegion = '', // Define classes for the repeated content
		stickyRegion = '', // Define classes for the sticky element
		hoverClasses = ''; // Define wrapper classes when hovered;
	const mergedOptions: MarqueeckOptions = { ...defaultOptions, ...options };
	let DefaultPlaceHolder = 'Marqueeck Svelte';

	$: wrapperInnerWidth = wrapperWidth - 2 * mergedOptions.padding.x;
	$: repeatedChildNumber = Math.floor(wrapperInnerWidth / (childWidth + mergedOptions.gap)) + 3;
	$: initialPos = -(childWidth + mergedOptions.gap);
	$: reactiveHoverClasses = $isMouseIn ? hoverClasses : '';

	// FUNCTIONS
	const translate = (node: HTMLElement, options: TranslateOptions) => {
		tick().then(() => {
			setOpacity(childRef, 1);
			let currentX = initialPos,
				totalMoved = 0,
				distanceToMove = Math.abs(initialPos);
			const { direction } = mergedOptions;

			function update() {
				const currentSpeed = options.currentSpeed();
				currentX += direction === 'left' ? -currentSpeed / 60 : currentSpeed / 60;
				totalMoved += currentSpeed / 60;

				node.style.setProperty('--ribbonXpos', currentX + 'px');

				if (totalMoved >= distanceToMove) {
					totalMoved = 0;
					currentX = initialPos;
				}
				requestAnimationFrame(update);
			}
			update();
		});
	};

	// TWEENED SPEED VALUE
	const tweenedSpeed = tweened(mergedOptions.speed * (options.speedFactor ?? 1), {
		duration: mergedOptions.gradualHoverDuration,
		easing: mergedOptions.easing
	});

	// EVENTS MANAGER
	const dispatch = createEventDispatcher();
	const HoverInEvent = async () => dispatch('hoverIn');
	const HoverOutEvent = async () => dispatch('hoverOut');
	const ClickEvent = async () => dispatch('click');

	const handleMouseEnter = async () => {
		if (hasHoverState(mergedOptions as MarqueeckOptions)) {
			$isMouseIn = true;
			await HoverInEvent();

			if (mergedOptions.onHover === 'customSpeed') {
				$tweenedSpeed = mergedOptions.hoverSpeed * (options.speedFactor ?? 1);
			} else {
				$tweenedSpeed = 0;
			}
		}
	};

	const handleMouseLeave = async () => {
		if (hasHoverState(mergedOptions as MarqueeckOptions)) {
			$isMouseIn = false;
			await HoverOutEvent();
			await tweenedSpeed.update(() => mergedOptions.speed * (options.speedFactor ?? 1));
		}
	};

	const handleMouseClick = async () => await ClickEvent();
</script>

<div
	class="marqueeck-wrapper
		{$$props.class ?? ''} {reactiveHoverClasses} {debugState(mergedOptions.debug)}"
	bind:offsetWidth={wrapperWidth}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	on:click={handleMouseClick}
	on:keydown={handleMouseClick}
	use:translate={{
		initialPosition: initialPos,
		options: mergedOptions,
		isMouseIn: () => $isMouseIn,
		currentSpeed: () => $tweenedSpeed * (options.speedFactor ?? 1)
	}}
	style:gap="{mergedOptions.gap}px"
	style:padding-inline="{mergedOptions.padding.x}px"
	style:padding-block="{mergedOptions.padding.y}px"
	style:--ribbonXpos={initialPos + 'px'}
>
	<div class="marqueeck-ribbon {ribbonRegion ?? ''}">
		<!-- Put one element to get its size -->
		<span
			class="marqueeck-child {childRegion ?? ''}"
			style:opacity="0"
			bind:offsetWidth={childWidth}
			bind:this={childRef}
			transition:fade
		>
			<slot>{DefaultPlaceHolder}</slot>
		</span>

		<!-- Repeating content the necessary times -->
		{#each { length: repeatedChildNumber } as item, i}
			<span class="marqueeck-child {childRegion ?? ''}" transition:fade>
				<slot>{DefaultPlaceHolder}</slot>
			</span>
		{/each}
	</div>
	<!-- Use sticky slot if provided -->
	{#if $$slots.sticky}
		<div
			class="marqueeck-sticky {stickyRegion ?? ''}"
			style:padding-inline="{mergedOptions.padding.x}px"
			style={stickyPos(mergedOptions)}
		>
			<slot name="sticky" />
		</div>
	{/if}
</div>

{#if mergedOptions.debug}
	<pre class="marqueeck-log unstyled">
		<!-- <span>direction: {mergedOptions.direction}</span> -->
		<span>wrapperInnerWidth: {wrapperInnerWidth} px</span>
		<span>childWidth: {childWidth} px</span>
		<span>childNumber: {repeatedChildNumber} elements</span>
		<span>tweenedSpeed: {Math.round($tweenedSpeed)} ms/sec</span>
		<span>isMouseIn: {$isMouseIn}</span>
		<span>reactiveHoverClasses: {reactiveHoverClasses}</span>
		<span>speedFactor: {mergedOptions.speedFactor}</span>
	</pre>
{/if}

<style>
	.marqueeck-wrapper {
		width: 100%;
		background-color: var(--bg-color, #a4d9cd);
		color: var(--text-color, #0b8c61);
		display: flex;
		flex-flow: row nowrap;
		overflow-x: hidden;
		position: relative;
		--ribbonXpos: 0px;
	}

	.marqueeck-ribbon {
		display: inherit;
		flex-flow: inherit;
		gap: inherit;
		position: inherit;
		transform: translateX(var(--ribbonXpos));
		will-change: transform;
	}

	.marqueeck-child {
		display: inline;
		width: max-content;
	}

	.marqueeck-sticky {
		position: absolute;
		background-color: var(--bg-color, #a4d9cd);
		width: -moz-fit-content;
		width: fit-content;
	}

	.marqueeck-log {
		display: flex;
		flex-flow: column wrap;
		border: 1px solid #0b8c61;
		padding: 4px;
		margin-block: 8px;
		margin-inline: 8px;
		border-radius: 4px;
		width: -moz-fit-content;
		width: fit-content;
		font-size: 13px;
	}

	.marqueeck-wrapper.show-debug .marqueeck-child:nth-child(3n-1) {
		outline: solid 1px #0b8c61;
	}
</style>
