<script lang="ts" context="module">
	export type MarqueeOptions = {
		speed: number;
		direction: 'left' | 'right';
		gap: number;
		paddingWrapper: number;
		debug?: boolean;
		stopOnHover?: boolean;
		onHover?: 'none' | 'stop' | 'slow';
		gradualStopDuration?: number;
	};
</script>

<script lang="ts">
	import { tweened } from 'svelte/motion';
	import { quadInOut } from 'svelte/easing';
	import { TranslateX } from '$lib/translateX.ts';

	export let options: MarqueeOptions = {
			speed: 50,
			direction: 'right',
			gap: 20,
			paddingWrapper: 10,
			debug: false,
			onHover: 'none',
			gradualStopDuration: 1000
		},
		wrapperClasses = '', // Define class for the container
		contentClasses = '', // Define class for the repeating wrapper
		elementClasses = ''; // Define class for the repeated content

	const speed = tweened(options.speed, {
		duration: options.gradualStopDuration,
		easing: quadInOut
	});

	let wrapperWidth: number, wrapperHeight: number, contentWidth: number, contentHeight: number;
	let extendContentby = 3;

	$: wrapperInnerWidth = wrapperWidth - 2 * options.paddingWrapper;
	$: contentNumber = Math.ceil(wrapperInnerWidth / (contentWidth + options.gap)) + extendContentby;

	const handleMouseEnter = async () => {
		if (options.onHover === 'stop' || options.onHover === 'slow') {
			console.log('Mouse hover');
			if (options.onHover === 'slow') {
				await speed.update(() => 10);
			} else {
				await speed.update(() => 0);
			}
		}
	};

	const handleMouseLeave = async () => {
		if (options.onHover === 'stop' || options.onHover === 'slow') {
			console.log('Mouse leave');
			await speed.update(() => options.speed);
		}
	};
</script>

<div
	class="marquee-wrapper {wrapperClasses}"
	style="gap: {options.gap}px;
        padding-inline: {options.paddingWrapper}px;"
	bind:offsetWidth={wrapperWidth}
	bind:offsetHeight={wrapperHeight}
	on:mouseenter={handleMouseEnter}
	on:mouseleave={handleMouseLeave}
>
	<div
		class="marquee-content {contentClasses}"
		style="transform: translateX(-{(contentWidth + options.gap) * extendContentby}px);"
		use:TranslateX={{
			direction: options.direction,
			speed: options.speed,
			distance: contentWidth + options.gap,
			currentSpeed: () => $speed
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
	<code
		style="display: flex; flex-flow: column wrap; border: 1px solid lightslategrey; padding:10px; margin-top:10px; margin-inline:10px;"
	>
		<div>wrapperInnerWidth: {wrapperInnerWidth}px</div>
		<div>contentWidth: {contentWidth}px</div>
		<div>contentNumber: {contentNumber} elements</div>
		<div>tweenedSpeed: {$speed}</div>
	</code>
{/if}

<style>
	.marquee-wrapper {
		width: 100%;
		background-color: lightslategrey;
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

	.white {
		color: white;
	}
</style>
