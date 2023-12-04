<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { tweened } from 'svelte/motion';

	import type { PublicMarqueeckOptions } from './types';
	import { defaults, marqueeckSlide, optionsMerger } from './marqueeck';
	import './marqueeck.css';

	// * PROPS
	export let options: PublicMarqueeckOptions = defaults;
	export let isMouseHovering = false;
	export let still = false;
	export let extend = true;
	export let onClick: ((event: MouseEvent | KeyboardEvent) => void) | undefined = undefined;
	export let ribbonClasses = '', // Classes for the repeating wrapper
		childClasses = '', // Classes for the repeated content
		stickyClasses = '', // Classes for the sticky element
		separatorClasses = '', // Classes for the sticky element
		hoverClasses = ''; // Classes when Marqueeck is hovered

	let renderElaimant = true;
	let wrapperWidth: number;
	let childWidth: number;
	let initialPos: number;
	let role: 'marquee' | 'button' = 'marquee';
	let tabindex = -1;
	let opt = optionsMerger(options, [{ still: still }]);

	const { childTransition, childStagger, childStaggerDuration } = opt;
	const { separator, stickyStart, stickyEnd } = $$slots;
	const tweenedSpeed = tweened(opt.speed * opt.speedFactor(), {
		duration: opt.brakeDuration,
		easing: opt.easing
	});

	// * SLOT CHECK
	if (!$$slots.default) {
		console.error('📦 Wrap something inside the Marqueeck component.');
		renderElaimant = false;
	}

	// * REACTIVE STATEMENTS
	$: wrapperInnerWidth = wrapperWidth - 2 * opt.paddingX;
	$: neededChildren = Math.round(wrapperInnerWidth / (childWidth + opt.gap)) + 2;
	$: initialPos = -(childWidth + opt.gap);
	$: reactiveHoverClasses = isMouseHovering ? hoverClasses : '';
	$: role = onClick ? 'button' : 'marquee';
	$: tabindex = onClick ? 0 : -1;
	$: opt = optionsMerger(options, [{ still: still }, { currentSpeed: () => $tweenedSpeed }]);

	// * HANDLE EVENTS
	const handleClick = (event: MouseEvent | KeyboardEvent) => {
		if (!onClick) return;
		if (event.type === 'click') onClick(event);
		if (event.type === 'keydown') {
			const { code } = event as KeyboardEvent;
			if (code === 'Space' || code === 'Enter') onClick(event);
		}
	};

	const dispatch = createEventDispatcher();
	const handleHover = async (event: CustomEvent) => {
		if (opt.onHover === 'none') return;
		$tweenedSpeed = event.detail
			? opt.hoverSpeed * opt.speedFactor()
			: opt.speed * opt.speedFactor();

		dispatch('hover', { detail: event.detail });
	};
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
{#if renderElaimant}
	<div
		data-marqueeck-wrapper
		class="{$$props.class ?? ''} {extend ? 'extend' : ''} {reactiveHoverClasses} "
		style:--marqueeck-x-pad="{opt.paddingX}px"
		style:--ribbonXpos="{initialPos}px"
		{role}
		{tabindex}
		aria-live="polite"
		bind:offsetWidth={wrapperWidth}
		on:click={handleClick}
		on:keydown={handleClick}
		on:marqueeckHover={handleHover}
		use:marqueeckSlide={opt}
	>
		<!-- * Children -->
		<div data-marqueeck-ribbon class={ribbonClasses} style:gap="{opt.gap}px" aria-live="polite">
			<span
				data-marqueeck-child
				class={childClasses}
				style:opacity="0"
				aria-live="polite"
				aria-atomic="true"
				bind:offsetWidth={childWidth}
				transition:childTransition
			>
				<slot hovered={isMouseHovering} />
				{#if separator}
					<div data-marqueeck-separator class={separatorClasses}>
						<slot name="separator" />
					</div>
				{/if}
			</span>

			{#each { length: neededChildren } as _, i}
				<span
					data-marqueeck-child
					class={childClasses}
					aria-live="polite"
					aria-atomic="true"
					aria-hidden="true"
					transition:childTransition={{
						delay: childStagger ? childStaggerDuration * i : 0
					}}
				>
					<slot hovered={isMouseHovering} />
					{#if separator}
						<span data-marqueeck-separator class={separatorClasses}>
							<slot name="separator" />
						</span>
					{/if}
				</span>
			{/each}
		</div>

		<!-- * Stickies -->
		{#if stickyStart}
			<div data-marqueeck-sticky class="start {stickyClasses}" style:left={0}>
				<slot name="stickyStart" />
			</div>
		{/if}
		{#if stickyEnd}
			<div data-marqueeck-sticky class="end {stickyClasses}" style:right={0}>
				<slot name="stickyEnd" />
			</div>
		{/if}
	</div>
{/if}
