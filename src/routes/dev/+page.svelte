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

<div class="container !pt-0">
	<div class=" max-h-[380px] overflow-auto relative" on:scroll={scrollHandler}>
		<h3
			class="fixed top-[540px] translate-y-1/2 left-0 right-0 w-full text-center mix-blend-soft-light text-black"
		>
			Scroll in this container to see the affect Marqueeck's speed _
		</h3>
		<div class="card p-4 bg-gradient-to-b from-primary-500 to-yellow-300 h-[2000px]" />
	</div>
</div>
