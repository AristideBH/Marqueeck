<script lang="ts">
	import { createEventDispatcher, tick } from 'svelte';
	// prettier-ignore
	import { hasHoverState, defaults, stickyPos, setOpacity, debugState } from './Marqueeck.js';
	import type { MarqueeckOptions, TranslateOptions } from './Marqueeck.js';
	import { tweened } from 'svelte/motion';
	import { fade } from 'svelte/transition';

	// * VARIABLES
	let wrapperWidth: number,
		childWidth: number,
		childRef: HTMLElement,
		DefaultPlaceHolder = 'Marqueeck Svelte',
		isMouseHovering = false;
	// * PROPS
	export let options: MarqueeckOptions = { ...(defaults as MarqueeckOptions) },
		ribbonClasses = '', // Define classes for the repeating wrapper
		childClasses = '', // Define classes for the repeated content
		stickyClasses = '', // Define classes for the sticky element
		hoverClasses = ''; // Define wrapper classes when hovered;

	if ($$props.options) {
		options = { ...defaults, ...$$props.options };
		console.log('custom options passed');
		console.log(options);
	}

	// * Reactive statements
	$: wrapperInnerWidth = wrapperWidth - 2 * (options.padding?.x ?? defaults.padding.x);
	$: repeatedChildNumber =
		Math.floor(wrapperInnerWidth / (childWidth + (options.gap ?? defaults.gap))) + 3;
	$: initialPos = -(childWidth + (options.gap ?? defaults.gap));
	$: reactiveHoverClasses = isMouseHovering ? hoverClasses : '';

	// * FUNCTIONS
	const translate = (node: HTMLElement, tsOptions: TranslateOptions) => {
		tick().then(() => {
			setOpacity(childRef, 1);
			let currentX = initialPos,
				totalMoved = 0,
				distanceToMove = Math.abs(initialPos);
			const { direction } = options;

			function update() {
				const currentSpeed = tsOptions.currentSpeed();
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

	// * TWEENED SPEED VALUE
	const tweenedSpeed = tweened((options.speed ?? defaults.speed) * (options.speedFactor ?? 1), {
		duration: options.gradualHoverDuration,
		easing: options.easing
	});

	//* EVENTS MANAGER
	const dispatch = createEventDispatcher();
	const HoverInEvent = async () => dispatch('hoverIn');
	const HoverOutEvent = async () => dispatch('hoverOut');
	const ClickEvent = async () => dispatch('click');

	const handleMouseEnter = async () => {
		if (hasHoverState(options as MarqueeckOptions)) {
			isMouseHovering = true;
			await HoverInEvent();

			if (options.onHover === 'customSpeed') {
				$tweenedSpeed = (options.hoverSpeed ?? defaults.hoverSpeed) * (options.speedFactor ?? 1);
			} else {
				$tweenedSpeed = 0;
			}
		}
	};

	const handleMouseLeave = async () => {
		if (hasHoverState(options as MarqueeckOptions)) {
			isMouseHovering = false;
			await HoverOutEvent();
			await tweenedSpeed.update(
				() => (options.hoverSpeed ?? defaults.hoverSpeed) * (options.speedFactor ?? 1)
			);
		}
	};

	const handleMouseClick = async () => await ClickEvent();
</script>

<div
	role="button"
	tabindex="0"
	class="marqueeck-wrapper
		{$$props.class ?? ''} {reactiveHoverClasses} {debugState(options.debug ?? defaults.debug)}"
	bind:offsetWidth={wrapperWidth}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	on:click={handleMouseClick}
	on:keydown={handleMouseClick}
	use:translate={{
		initialPosition: initialPos,
		options: options,
		isMouseIn: () => isMouseHovering,
		currentSpeed: () => $tweenedSpeed * (options.speedFactor ?? defaults.speedFactor)
	}}
	style:gap="{options.gap}px"
	style:--ribbonXpos={initialPos + 'px'}
	style:--marqueeck-x-pad="{options.padding?.x ?? defaults.padding.x}px"
	style:--marqueeck-y-pad="{options.padding?.y ?? defaults.padding.y}px"
>
	<div class="marqueeck-ribbon {ribbonClasses ?? ''}">
		<!-- * Put one element to get its size -->
		<span
			class="marqueeck-child {childClasses ?? ''}"
			style:opacity="0"
			bind:offsetWidth={childWidth}
			bind:this={childRef}
			transition:fade
		>
			<slot>{DefaultPlaceHolder}</slot>
		</span>

		<!-- * Repeating content the necessary times -->
		{#each { length: repeatedChildNumber } as _}
			<span class="marqueeck-child {childClasses ?? ''}" transition:fade>
				<slot>{DefaultPlaceHolder}</slot>
			</span>
		{/each}
	</div>
	<!-- * Use sticky slot if provided -->
	{#if $$slots.sticky}
		<div class="marqueeck-sticky {stickyClasses ?? ''}" style={stickyPos(options)}>
			<slot name="sticky" />
		</div>
	{/if}
</div>

{#if options.debug}
	<pre class="marqueeck-log unstyled">
		<span>direction: {options.direction}</span>
		<span>wrapperInnerWidth: {wrapperInnerWidth} px</span>
		<span>childWidth: {childWidth} px</span>
		<span>childNumber: {repeatedChildNumber} elements</span>
		<span>tweenedSpeed: {Math.round($tweenedSpeed)} ms/sec</span>
		<span>isMouseIn: {isMouseHovering}</span>
		<span>reactiveHoverClasses: {reactiveHoverClasses}</span>
		<span>speedFactor: {options.speedFactor}</span>
	</pre>
{/if}

<style>
	.marqueeck-wrapper {
		width: calc(100% - 2 * var(--marqueeck-x-pad));
		background-color: var(--marqueeck-bg-color);
		color: var(--marqueeck-text-color);
		padding-inline: var(--marqueeck-x-pad);
		padding-block: var(--marqueeck-y-pad);
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
		background-color: var(--marqueeck-bg-color);
		padding-inline: var(--marqueeck-x-pad);
		width: -moz-fit-content;
		width: fit-content;
	}

	.marqueeck-log {
		display: flex;
		flex-flow: column wrap;
		border: 1px solid var(--marqueeck-bg-color);
		padding: 4px;
		margin-block: 8px;
		margin-inline: 8px;
		border-radius: 4px;
		width: -moz-fit-content;
		width: fit-content;
		font-size: 13px;
	}

	.marqueeck-wrapper.show-debug .marqueeck-child:nth-child(3n-1) {
		outline: solid 1px var(--marqueeck-bg-color);
	}
</style>
