<script lang="ts">
	import Marqueeck from '$lib/package/index';
	import { Button } from '$lib/components/ui/button';
	import { type MarqueeckOptions, type MarqueeckHoverEvent } from '$lib/package';
	import { tweened } from 'svelte/motion';

	const state = tweened(1);
	let options: MarqueeckOptions = {
		gap: 25,
		direction: 'right',
		speed: 75,
		paddingX: 25,
		hoverSpeed: 5,
		speedFactor: () => $state
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

	<div>
		<Button variant="secondary" on:click={() => ($state = $state === 1 ? 0 : 1)}>
			{$state === 1 ? 'Stop' : 'Play'}
		</Button>
		<Button
			variant="secondary"
			on:click={() => {
				options.direction = options.direction === 'right' ? 'left' : 'right';
			}}
		>
			Change direction
		</Button>
		<Button
			variant="secondary"
			on:click={() => {
				options.gap = options.gap === 25 ? 50 : 25;
			}}
			>Change gap
		</Button>
	</div>
</div>
