<script lang="ts">
	// import Marqueeck, { type MarqueeckOptions } from '@arisbh/marqueeck';
	import Marqueeck, { type MarqueeckOptions } from '$lib/index.js';
	import {
		scrollState,
		scrollHandler,
		factorHelper,
		pingPongHelper
	} from '$lib/MarqueeckScroll.js';

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
		gradualHoverDuration: 1000,
		speedFactor: mouseValue
	};
</script>

<Marqueeck
	options={options1}
	--bg-color={'rgb(164, 217, 205)'}
	--text-color={'rgb(var(--color-primary-700))'}
	hoverClasses="!bg-primary-500 !text-white"
	class="transition-all cursor-pointer duration-1000 ease-in-out"
>
	<div class="flex gap-2 items-end text-5xl">
		<span> 👋 </span>
		<strong class="">Marqueeck</strong>
	</div>
</Marqueeck>

<div class="container relative flex flex-wrap gap-y-2 gap-x-4">
	<p class="text-lg unstyled w-full">
		Scroll in the container below to see the effect on Marqueeck's speed !
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
		<br />

		<p class="">
			Here, we're using the calculated scroll velocity to impact Marqueeck's speed via the
			<code>speedFactor</code> proprety.
		</p>
	</div>
</div>
