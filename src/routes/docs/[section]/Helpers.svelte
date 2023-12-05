<script lang="ts">
	import { Progress } from '$lib/components/ui/progress';
	import { Button } from '$lib/components/ui/button';
	import { CodeBlock } from 'svhighlight';
	import { tweened } from 'svelte/motion';
	import Marqueeck, {
		pingPongHelper,
		factorDamper,
		scrollHandler,
		scrollState,
		type MarqueeckOptions
	} from '$lib/package';
	import {
		Play,
		Pause,
		ArrowBigLeft,
		ArrowBigRight,
		UnfoldHorizontal,
		FoldHorizontal
	} from 'lucide-svelte';

	const cyclingValue = pingPongHelper(1, 6, 1500);

	const speed = tweened(1);
	const playPause = () => ($speed = $speed === 1 ? 0 : 1);
	const changeDirection = () =>
		(options.direction = options.direction === 'right' ? 'left' : 'right');
	const changeGap = () => (options.gap = options.gap === 25 ? 50 : 25);

	let options: MarqueeckOptions = {
		gap: 25,
		direction: 'right',
		speedFactor: () => $speed
	};

	function remapValue(value: number) {
		var oldMin = 1;
		var oldMax = 6;
		var newMin = 0;
		var newMax = 100;

		var newValue = newMin + (newMax - newMin) * ((value - oldMin) / (oldMax - oldMin));

		return newValue;
	}
</script>

<p>I have cooked a few functionnality recipes for you to get the sense of Marqueeck versality ;)</p>
<p>
	Feel free to copy and/or improve them, and if you have more idea, please let me know in a <a
		href="https://github.com/AristideBH/Marqueeck/issues"
		target="_blank"
	>
		GitHub issue</a
	>.
</p>
<blockquote>Most of these example makes use of the <code>speedFactor</code> prop.</blockquote>

<h2>Scroll sync</h2>

<Marqueeck options={{ speedFactor: () => factorDamper($scrollState.velocity, 3) }}>
	[ Your element ]
</Marqueeck>

<div class="flex gap-4 my-4">
	<div class="relative w-full overflow-auto border rounded max-h-56" on:scroll={scrollHandler}>
		<div class="sticky text-center top-5">Scroll in this container</div>
		<div class="py-4 h-[200vw] w-full bg-gradient-to-b from-transparent to-primary"></div>
	</div>
	<div class="w-full">
		<p>
			Here, we are using the scroll position to affect the <code>speedFactor</code> property in options.
		</p>
		<p>
			You could even get the direction of the scroll and update Marqueeck <code
				>options.direction</code
			> accordingly.
		</p>
	</div>
</div>

<CodeBlock
	language="svelte"
	code={`<script>
	import Marqueeck, { factorDamper, scrollHandler, scrollState } from '@arisbh/marqueeck';
	const cyclingValue = pingPongHelper(1, 6, 1500);
<\/script>

<Marqueeck options={{ speedFactor: () => factorDamper($scrollState.velocity, 3) }}>
	[ Your element ]
</Marqueeck>`}
/>

<h2>Cyclic speed</h2>

<Marqueeck options={{ speedFactor: () => $cyclingValue }}>[ Your element ]</Marqueeck>

<div class="flex gap-4 my-4">
	<div class="flex flex-col w-full gap-3">
		<Progress value={remapValue($cyclingValue)} />
		<p>
			<code>CyclingValue: {JSON.stringify($cyclingValue, undefined, 2)}</code>
		</p>
	</div>
	<div class="w-full">
		<p>Here, we are using a tweened value that cycles based on given parameters.</p>
	</div>
</div>

<CodeBlock
	language="svelte"
	code={`<script>
	import Marqueeck, { pingPongHelper } from '@arisbh/marqueeck';
	const cyclingValue = pingPongHelper(1, 6, 1500);
<\/script>

<Marqueeck options={{ speedFactor: () => $cyclingValue }} >
	[ Your element ]
</Marqueeck>`}
/>

<!-- <h2>Mouse modifier</h2> -->

<h2>Play/Pause</h2>
<Marqueeck {options}>[ Your element ]</Marqueeck>

<div class="flex gap-4 my-4">
	<div class="flex gap-2">
		<Button variant="secondary" size="icon" title="Play/Pause" on:click={playPause}>
			{#if !$speed}
				<Play class="w-4 h-4 " />
			{:else}
				<Pause class="w-4 h-4 " />
			{/if}
		</Button>
		<Button variant="secondary" size="icon" title="Change direction" on:click={changeDirection}>
			{#if options.direction === 'right'}
				<ArrowBigLeft class="w-4 h-4 " />
			{:else}
				<ArrowBigRight class="w-4 h-4 " />
			{/if}
		</Button>
		<Button variant="secondary" size="icon" title="Change gap size" on:click={changeGap}>
			{#if options.gap === 25}
				<UnfoldHorizontal class="w-4 h-4 " />
			{:else}
				<FoldHorizontal class="w-4 h-4 " />
			{/if}
		</Button>
	</div>
	<div class="w-full">
		<p>
			When you construct a <code>options</code> object, you are easily able to update it.
		</p>
		<p>Here we are creating three buttons to interact with the component.</p>
	</div>
</div>

<CodeBlock
	language="svelte"
	code={`<script>
    import Marqueeck, { type MarqueeckOptions } from '@arisbh/marqueeck';
    import { tweened } from 'svelte/motion';

    const speed = tweened(1);
	const playPause = () => ($speed = $speed === 1 ? 0 : 1);
	const changeDirection = () => (options.direction = options.direction === 'right' ? 'left' : 'right');
	const changeGap = () => (options.gap = options.gap === 25 ? 50 : 25);
    
    let options: MarqueeckOptions = {
        gap: 25,
        direction: 'right',
        speedFactor: () => $speed
    };
<\/script>

<Marqueeck {options} >
	[ Your element ]
</Marqueeck>

<button	on:click={playPause} > Play/Pause </button>
<button	on:click={changeDirection} > Change direction </button>
<button	on:click={changeGap} > Change gap size </button>`}
/>
