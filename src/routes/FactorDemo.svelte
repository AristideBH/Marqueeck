<script lang="ts">
	import Marqueeck, { type MarqueeckOptions } from '$lib/index.js';
	// prettier-ignore
	import { scrollState, scrollHandler, factorHelper, pingPongHelper} from '$lib/SpeedFactorHelpers.js';
	import { Accordion, AccordionItem } from '@skeletonlabs/skeleton';

	const cyclingValue = pingPongHelper(1, 3, 2000);

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
		onHover: 'stop',
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
<div class="space-y-4 !mt-6">
	<section class="space-y-4 card py-4">
		<Marqueeck
			options={options1}
			--bg-color={'rgb(164, 217, 205)'}
			--text-color={'rgb(var(--color-primary-700))'}
		>
			<strong class="flex gap-2 items-end text-4xl"> Scroll happens </strong>
		</Marqueeck>

		<div class="relative flex flex-wrap gap-y-2 gap-x-6 px-4">
			<p class="text-lg unstyled w-full">
				⏬ Scroll in the container below to see the effect on Marqueeck's speed !
			</p>
			<div class="max-h-[280px] overflow-auto grow w-full lg:w-auto" on:scroll={scrollHandler}>
				<div class="card p-4 bg-gradient-to-b from-primary-500 to-secondary-400 h-[2000px]" />
			</div>
			<div class="z-10 pointer-events-none flex flex-col min-w-[250px] lg:w-min shrink space-y-2">
				<ul class="list-disc font-mono font-bold pl-4 hidden">
					<li>{+$scrollState.distance.toFixed(2)} px scrolled</li>
					<li>{$scrollState.percentage} % scrolled</li>
					<li>Scroll : {$scrollState.direction}</li>
					<li>{+Math.abs($scrollState.velocity).toFixed(2)} px/sec</li>
				</ul>
				<pre>speedFactor : {factorHelper($scrollState.velocity, 3).toFixed(2)}</pre>

				<p>
					Here, we're using the calculated scroll inertia to impact Marqueeck's speed via the
					<code>speedFactor</code> proprety.
				</p>
			</div>
		</div>

		<Accordion class="px-4">
			<AccordionItem>
				<svelte:fragment slot="summary">Code insight</svelte:fragment>
				<svelte:fragment slot="content">
					<blockquote class="!mt-4">...writing documentation...</blockquote>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</section>

	<section class="space-y-4 card py-4">
		<Marqueeck
			options={options2}
			--bg-color={'rgb(164, 217, 205)'}
			--text-color={'rgb(var(--color-primary-700))'}
		>
			<strong class="flex gap-2 items-end text-4xl"> Cyclic speed </strong>
		</Marqueeck>

		<div class=" relative flex flex-wrap gap-y-2 gap-x-6 px-4">
			<div class="max-h-[380px] overflow-auto grow w-full md:w-auto">
				<pre>speedFactor : {$cyclingValue.toFixed(2)}</pre>
				<input type="range" value={$cyclingValue * 100} min="100" max="300" />
			</div>
			<div class="z-10 pointer-events-none flex flex-col min-w-[250px] md:w-min shrink space-y-2">
				<p class="">
					Here, we're using a ping-ponging value to impact Marqueeck's speed via the
					<code>speedFactor</code> proprety.
				</p>
			</div>
		</div>

		<Accordion class="px-4">
			<AccordionItem>
				<svelte:fragment slot="summary">Code insight</svelte:fragment>
				<svelte:fragment slot="content">
					<blockquote class="!mt-4">...writing documentation...</blockquote>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</section>

	<section class="space-y-4 card py-4">
		<Marqueeck
			options={options3}
			--bg-color={'rgb(164, 217, 205)'}
			--text-color={'rgb(var(--color-primary-700))'}
		>
			<strong class="flex gap-2 items-end text-4xl"> Mouse modifier </strong>
		</Marqueeck>

		<div class=" relative flex flex-wrap gap-y-2 gap-x-6 px-4">
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

		<Accordion class="px-4">
			<AccordionItem>
				<svelte:fragment slot="summary">Code insight</svelte:fragment>
				<svelte:fragment slot="content">
					<blockquote class="!mt-4">...writing documentation...</blockquote>
				</svelte:fragment>
			</AccordionItem>
		</Accordion>
	</section>
</div>
