<script lang="ts">
	import Marqueeck from '$lib/package/index';
	import { Button } from '$lib/components/ui/button';
	import { type MarqueeckOptions, type MarqueeckHoverEvent } from '$lib/package';
	import { tweened } from 'svelte/motion';
	import { slide } from 'svelte/transition';
	import {
		Play,
		Pause,
		ArrowBigLeft,
		ArrowBigRight,
		UnfoldHorizontal,
		FoldHorizontal
	} from 'lucide-svelte';

	const state = tweened(1);
	let options: MarqueeckOptions = {
		gap: 25,
		direction: 'right',
		speed: 75,
		paddingX: 25,
		hoverSpeed: 5,
		speedFactor: () => $state,
		childTransition: slide
	};

	const handleHover = (e: MarqueeckHoverEvent) => {
		console.log(`Hover: ${e.detail}`);
	};

	const handleClick = () => {
		console.log('Clicked');
	};
</script>

<div class="overflow-hidden pt-[24vh] flex flex-col gap-[1vh]">
	<Marqueeck {options} on:hover={handleHover} onClick={handleClick} class="py-2">
		<h1 class="text-2xl italic font-semibold">Marqueeck</h1>
		<svelte:fragment slot="separator">✱</svelte:fragment>
		<svelte:fragment slot="stickyStart">Hello,</svelte:fragment>
		<svelte:fragment slot="stickyEnd">Goodbye</svelte:fragment>
	</Marqueeck>

	<div class="flex gap-2">
		<Button
			variant="secondary"
			size="icon"
			title="Play/Pause"
			on:click={() => ($state = $state === 1 ? 0 : 1)}
		>
			{#if !$state}
				<Play class="w-4 h-4 " />
			{:else}
				<Pause class="w-4 h-4 " />
			{/if}
		</Button>
		<Button
			variant="secondary"
			size="icon"
			title="Change direction"
			on:click={() => {
				options.direction = options.direction === 'right' ? 'left' : 'right';
			}}
		>
			{#if options.direction === 'right'}
				<ArrowBigLeft class="w-4 h-4 " />
			{:else}
				<ArrowBigRight class="w-4 h-4 " />
			{/if}
		</Button>
		<Button
			variant="secondary"
			size="icon"
			title="Change gap size"
			on:click={() => {
				options.gap = options.gap === 25 ? 50 : 25;
			}}
		>
			{#if options.gap === 25}
				<UnfoldHorizontal class="w-4 h-4 " />
			{:else}
				<FoldHorizontal class="w-4 h-4 " />
			{/if}
		</Button>
	</div>
</div>
