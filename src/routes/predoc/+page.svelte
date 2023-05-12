<script lang="ts">
	// import Marqueeck, { type MarqueeckOptions } from '@arisbh/marqueeck';
	import Marqueeck, { type MarqueeckOptions } from '$lib/index.js';
	// prettier-ignore
	import { scrollState, scrollHandler, factorHelper, pingPongHelper} from '$lib/SpeedFactorHelpers.js';

	const cyclingValue = pingPongHelper(1, 4, 2000);

	let m = { x: 0 };
	let innerWidth: number;
	let mouseValue: number;
	function handleMousemove(event: { clientX: number }) {
		m.x = event.clientX;
		mouseValue = +((m.x / innerWidth) * 6).toFixed(2);
	}

	let options1: Partial<MarqueeckOptions>,
		options2: Partial<MarqueeckOptions>,
		options3: Partial<MarqueeckOptions>;

	$: options1 = {
		direction: 'left',
		gap: 60,
		gradualHoverDuration: 1000,
		onHover: 'stop',
		speedFactor: factorHelper($scrollState.velocity, 3)
	};

	$: options2 = {
		direction: 'right',
		gap: 60,
		gradualHoverDuration: 1000,
		speedFactor: $cyclingValue
	};

	$: options3 = {
		direction: 'left',
		gap: 60,
		onHover: 'none',
		gradualHoverDuration: 1000,
		speedFactor: mouseValue
	};
</script>

<svelte:window on:mousemove={handleMousemove} bind:innerWidth />


<blockquote class="container">
	There are simple examples from the top of my head. You can pass any number to <code
		>speedFactor</code
	> and customize the behaviour of Marqueeck the way you like !
</blockquote>

<section class="space-y-4">
	<Marqueeck
		options={options1}
		--bg-color={'rgb(164, 217, 205)'}
		--text-color={'rgb(var(--color-primary-700))'}
	>
		<strong class="flex gap-2 items-end text-5xl"> Scroll happens </strong>
	</Marqueeck>

	<div class="container relative flex flex-wrap gap-y-2 gap-x-6">
		<p class="text-lg unstyled w-full">
			⏬ Scroll in the container below to see the effect on Marqueeck's speed !
		</p>
		<div class="max-h-[380px] overflow-auto grow w-full md:w-auto" on:scroll={scrollHandler}>
			<div class="card p-4 bg-gradient-to-b from-primary-500 to-teriary-500 h-[2000px]" />
		</div>
		<div class="z-10 pointer-events-none flex flex-col min-w-[250px] md:w-min shrink space-y-2">
			<ul class="list-disc font-mono font-bold pl-4 hidden">
				<li>{+$scrollState.distance.toFixed(2)} px scrolled</li>
				<li>{$scrollState.percentage} % scrolled</li>
				<li>Scroll : {$scrollState.direction}</li>
				<li>{+Math.abs($scrollState.velocity).toFixed(2)} px/sec</li>
			</ul>
			<pre>speedFactor : {factorHelper($scrollState.velocity, 3).toFixed(2)}</pre>
			<hr />
			<p class="">
				Here, we're using the calculated scroll inertia to impact Marqueeck's speed via the
				<code>speedFactor</code> proprety.
			</p>
		</div>
	</div>
</section>
<hr class="container" />

<section class="space-y-4">
	<Marqueeck
		options={options2}
		--bg-color={'rgb(164, 217, 205)'}
		--text-color={'rgb(var(--color-primary-700))'}
	>
		<strong class="flex gap-2 items-end text-5xl"> Cyclic speed </strong>
	</Marqueeck>

	<div class="container relative flex flex-wrap gap-y-2 gap-x-6">
		<div class="max-h-[380px] overflow-auto grow w-full md:w-auto">
			<pre>speedFactor : {$cyclingValue.toFixed(2)}</pre>
			<input type="range" value={$cyclingValue * 100} min="100" max="400" />
		</div>
		<div class="z-10 pointer-events-none flex flex-col min-w-[250px] md:w-min shrink space-y-2">
			<p class="">
				Here, we're using a ping-ponging value to impact Marqueeck's speed via the
				<code>speedFactor</code> proprety.
			</p>
		</div>
	</div>
</section>
<hr class="container" />

<section class="space-y-4">
	<Marqueeck
		options={options3}
		--bg-color={'rgb(164, 217, 205)'}
		--text-color={'rgb(var(--color-primary-700))'}
	>
		<strong class="flex gap-2 items-end text-5xl"> Mouse modifier </strong>
	</Marqueeck>

	<div class="container relative flex flex-wrap gap-y-2 gap-x-6">
		<div class="max-h-[380px] overflow-auto grow w-full md:w-auto">
			<pre>speedFactor : {mouseValue}</pre>
		</div>
		<div class="z-10 pointer-events-none flex flex-col min-w-[250px] md:w-min shrink space-y-2">
			<p class="">
				Here, we're using the mouse X position as a modifier to impact Marqueeck's speed via the
				<code>speedFactor</code> proprety.
			</p>
		</div>
	</div>
</section>
