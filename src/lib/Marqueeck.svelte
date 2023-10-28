<script lang="ts">
	import { createEventDispatcher, tick } from 'svelte';
	import { tweened } from 'svelte/motion';
	// prettier-ignore
	import { hasHoverState, defaults, stickyPos, setOpacity, debugState, type MarqueeckOptions, type TranslateOptions } from './Marqueeck.js';
	import './marqueeck.css';

	// * PROPS
	export let options: MarqueeckOptions = defaults,
		ribbonClasses = '', // Define classes for the repeating wrapper
		childClasses = '', // Define classes for the repeated content
		stickyClasses = '', // Define classes for the sticky element
		hoverClasses = '',
		on_click: ((event: MouseEvent | KeyboardEvent) => void) | undefined = undefined;

	// * VARIABLES
	let wrapperWidth: number,
		childWidth: number,
		childRef: HTMLElement,
		DefaultPlaceHolder = 'Marqueeck',
		isMouseHovering = false,
		role: 'marquee' | 'button' = 'marquee',
		tabindex = -1,
		transition = options.childTransition || defaults.childTransition;

	// * Conditional assignements
	if ($$props.options) options = { ...defaults, ...$$props.options }; // Merge passed option with defaults
	if (on_click) {
		role = 'button';
		tabindex = 0;
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
	const tweenedSpeed = tweened((options.speed ?? defaults.speed) * (defaults.speedFactor ?? 1), {
		duration: options.brakeDuration,
		easing: options.easing
	});

	//* EVENTS MANAGER
	const dispatch = createEventDispatcher();

	const HoverInEvent = async () => dispatch('hoverIn');
	const handleMouseEnter = async () => {
		if (hasHoverState(options)) {
			isMouseHovering = true;
			await HoverInEvent();

			if (options.onHover === 'customSpeed') {
				$tweenedSpeed = (options.hoverSpeed ?? defaults.hoverSpeed) * (options.speedFactor ?? 1);
			} else {
				$tweenedSpeed = 0;
			}
		}
	};

	const HoverOutEvent = async () => dispatch('hoverOut');
	const handleMouseLeave = async () => {
		if (hasHoverState(options)) {
			isMouseHovering = false;
			await HoverOutEvent();
			$tweenedSpeed =
				(options.speed ?? defaults.speed) * (options.speedFactor ?? defaults.speedFactor);
		}
	};

	const handleClick = (event: MouseEvent | KeyboardEvent) => {
		if (on_click) on_click(event);
	};
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
	class="marqueeck-wrapper
		{$$props.class ?? ''} {reactiveHoverClasses} {debugState(options.debug ?? defaults.debug)}"
	style:gap="{options.gap}px"
	style:--ribbonXpos="{initialPos}px"
	style:--marqueeck-x-pad="{options.padding?.x ?? defaults.padding.x}px"
	style:--marqueeck-y-pad="{options.padding?.y ?? defaults.padding.y}px"
	bind:offsetWidth={wrapperWidth}
	use:translate={{
		initialPosition: initialPos,
		options: options,
		isMouseIn: () => isMouseHovering,
		currentSpeed: () => $tweenedSpeed * (options.speedFactor ?? 1)
	}}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
	on:click={handleClick}
	on:keydown={handleClick}
	{role}
	{tabindex}
>
	<div class="marqueeck-ribbon {ribbonClasses ?? ''}">
		<!-- * Put one element to get its size -->
		<span
			class="marqueeck-child {childClasses ?? ''}"
			style:opacity="0"
			bind:offsetWidth={childWidth}
			bind:this={childRef}
			transition:transition
		>
			<slot>{DefaultPlaceHolder}</slot>
		</span>

		<!-- * Repeating content the necessary times -->
		{#each { length: repeatedChildNumber } as _, i}
			<span
				class="marqueeck-child {childClasses ?? ''}"
				transition:transition={{
					delay: options.childStagger
						? (options.childStaggerDuration ?? defaults.childStaggerDuration) * i
						: 0
				}}
			>
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
	<pre class="marqueeck-log">
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
