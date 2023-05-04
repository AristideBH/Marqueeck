<script lang="ts">
	// import Marqueeck, { type MarqueeckOptions } from '@arisbh/marqueeck';
	import Marqueeck, { type MarqueeckOptions } from '$lib/index.ts';
	import { scrollState, scrollHandler, factorHelper } from '$lib/MarqueeckScroll.ts';

	let options: MarqueeckOptions;
	$: options = {
		direction: 'left',
		gap: 60,
		gradualHoverDuration: 1000,
		onHover: 'stop',
		speedFactor: factorHelper($scrollState.velocity, 3)
	};
</script>

<Marqueeck
	{options}
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

<div class="container relative">
	<p class="text-center text-lg unstyled mb-2">
		Scroll in this container to see the effect on Marqueeck's speed !
	</p>
	<div
		class="absolute top-9 w-fit z-10 px-3 py-2 font-mono font-bold border-r border-b rounded-br-md transition-all border-black pointer-events-none"
	>
		<div>{+$scrollState.distance.toFixed(2)} px scrolled</div>
		<div>{$scrollState.percentage} % scrolled</div>
		<div>Scroll : {$scrollState.direction}</div>
		<div>{+Math.abs($scrollState.velocity * 3).toFixed(2)} px/sec</div>
	</div>
	<div class=" max-h-[380px] overflow-auto" on:scroll={scrollHandler}>
		<div class="card p-4 bg-gradient-to-b from-primary-500 to-yellow-300 h-[2000px]" />
	</div>
	<p>
		Here, we're using the calculated scroll velocity to impact Marqueeck's speed via the
		<code>speedFactor</code> proprety.
	</p>
</div>
