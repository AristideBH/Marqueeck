<script lang="ts">
	// import Marqueeck, { type MarqueeckOptions } from '@arisbh/marqueeck';
	import Marqueeck, { type MarqueeckOptions } from '$lib/index.ts';
	import {
		scrollState,
		scrollHandler,
		factorHelper,
		pingPongHelper
	} from '$lib/MarqueeckScroll.ts';

	const value = pingPongHelper(1, 5, 2000);

	let options1: MarqueeckOptions, options2: MarqueeckOptions;
	$: options1 = {
		direction: 'left',
		gap: 60,
		gradualHoverDuration: 1000,
		onHover: 'stop',
		speedFactor: factorHelper($scrollState.velocity, 3)
	};
	$: options2 = {
		direction: 'left',
		gap: 60,
		gradualHoverDuration: 1000,
		onHover: 'stop',
		speedFactor: $value
	};
</script>

<section class="space-y-4">
	<Marqueeck
		options={options1}
		--bg-color={'rgb(164, 217, 205)'}
		--text-color={'rgb(var(--color-primary-700))'}
		hoverClasses="!bg-primary-500 !text-white"
		class="transition-all cursor-pointer duration-1000 ease-in-out"
	>
		<strong class="flex gap-2 items-end text-5xl"> Scroll happens </strong>
	</Marqueeck>

	<div class="container relative flex flex-wrap gap-y-2 gap-x-6">
		<p class="text-lg unstyled w-full">
			⏬ Scroll in the container below to see the effect on Marqueeck's speed !
		</p>
		<div class="max-h-[380px] overflow-auto grow w-full md:w-auto" on:scroll={scrollHandler}>
			<div class="card p-4 bg-gradient-to-b from-primary-500 to-yellow-300 h-[2000px]" />
		</div>
		<div class="z-10 pointer-events-none flex flex-col min-w-[200px] md:w-min shrink space-y-2">
			<ul class="list-disc font-mono font-bold pl-4">
				<li>{+$scrollState.distance.toFixed(2)} px scrolled</li>
				<li>{$scrollState.percentage} % scrolled</li>
				<li>Scroll : {$scrollState.direction}</li>
				<li>{+Math.abs($scrollState.velocity).toFixed(2)} px/sec</li>
			</ul>
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
		hoverClasses="!bg-primary-500 !text-white"
		class="transition-all cursor-pointer duration-1000 ease-in-out"
	>
		<strong class="flex gap-2 items-end text-5xl"> Cyclic speed </strong>
	</Marqueeck>
	<p class="container">
		Here, we're using the a ping-ponging value to impact Marqueeck's speed via the
		<code>speedFactor</code> proprety.
	</p>
</section>
