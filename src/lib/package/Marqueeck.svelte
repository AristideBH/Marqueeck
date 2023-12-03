<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { tweened } from 'svelte/motion';
	import type { PublicMarqueeckOptions } from './types';
	import { defaults, marqueeckSlide, optionsMerger } from './marqueeck';

	// * PROPS
	export let options: PublicMarqueeckOptions = defaults;
	export let isMouseHovering = false;
	export let still = false;
	export let ribbonClasses = '', // Classes for the repeating wrapper
		childClasses = '', // Classes for the repeated content
		stickyClasses = '', // Classes for the sticky element
		separatorClasses = '', // Classes for the sticky element
		hoverClasses = ''; // Classes when Marqueeck is hovered
	export let onClick: ((event: MouseEvent | KeyboardEvent) => void) | undefined = undefined;

	let placeHolder = 'marqueeck placeholder';
	let wrapperWidth: number;
	let childWidth: number;
	let initialPos: number;
	let role: 'marquee' | 'button' = 'marquee';
	let tabindex = -1;
	let opt = optionsMerger(options, [{ still: still }]);

	const { separator, stickyStart, stickyEnd } = $$slots;
	const { childTransition, childStagger, childStaggerDuration } = opt;
	const tweenedSpeed = tweened(opt.speed * opt.speedFactor, {
		duration: opt.brakeDuration,
		easing: opt.easing
	});

	// * SLOT CHECK
	if (!$$slots.default) console.error('📦 Wrap something inside the Marqueeck component.');

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
		isMouseHovering = event.detail;

		if (opt.onHover === 'none') return;
		$tweenedSpeed = isMouseHovering
			? opt.hoverSpeed * opt.speedFactor
			: opt.speed * opt.speedFactor;

		dispatch('hover', { detail: event.detail });
	};
</script>

<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
<div
	data-marqueeck-wrapper
	class="{$$props.class ?? ''} {reactiveHoverClasses} "
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
	<div data-marqueeck-ribbon class={ribbonClasses} style:gap="{opt.gap}px" aria-live="polite">
		<!-- * Children -->
		<span
			data-marqueeck-child
			class={childClasses}
			style:opacity="0"
			aria-live="polite"
			aria-atomic="true"
			bind:offsetWidth={childWidth}
			transition:childTransition
		>
			<slot hovered={isMouseHovering}>{placeHolder}</slot>
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
				<slot hovered={isMouseHovering}>{placeHolder}</slot>
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

<style>
	[data-marqueeck-wrapper] {
		display: flex;
		flex-flow: row nowrap;
		overflow: hidden;
		width: calc(100% + 2 * var(--marqueeck-x-pad, 0));
		margin-inline: calc(-1 * var(--marqueeck-x-pad));
		padding-inline: var(--marqueeck-x-pad);
	}

	[data-marqueeck-ribbon] {
		display: inherit;
		flex-flow: inherit;
		gap: inherit;
		transform: translateX(var(--ribbonXpos));
		will-change: transform;
	}

	[data-marqueeck-child] {
		display: inline-flex;
		width: max-content;
		gap: inherit;
	}

	[data-marqueeck-sticky] {
		position: absolute;
		padding-inline: var(--marqueeck-x-pad);
		width: fit-content;
		background-color: inherit;
		color: inherit;
		height: 100%;
		top: 0;
		bottom: 0;
		display: inline-flex;
		align-items: center;

		&.start {
			padding-inline-start: calc(2 * var(--marqueeck-x-pad));
		}

		&.end {
			padding-inline-end: calc(2 * var(--marqueeck-x-pad));
		}
	}

	[data-marqueeck-separator] {
		width: fit-content;
		height: 100%;
		display: inline-flex;
		align-items: center;
		user-select: none;
	}
</style>
