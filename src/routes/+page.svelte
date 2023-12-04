<script lang="ts">
	import Marqueeck from '$lib/package/index';
	import { type MarqueeckOptions } from '$lib/package/index';

	let options: MarqueeckOptions = {
		gap: 25,
		direction: 'right',
		speed: 75,
		paddingX: 25,
		hoverSpeed: 5,
		speedFactor: () => 1
	};
</script>

<div class="overflow-hidden min-h-[100dvh] pt-[24vh] flex flex-col gap-[1vh]">
	<Marqueeck {options} class="py-2 bg-foreground text-background">
		<h1 class="text-2xl italic font-semibold">Marqueeck</h1>
		<svelte:fragment slot="separator">✱</svelte:fragment>
		<svelte:fragment slot="stickyStart">Hello,</svelte:fragment>
		<svelte:fragment slot="stickyEnd">Goodbye</svelte:fragment>
	</Marqueeck>

	<button
		on:click={() => {
			options.direction = options.direction === 'right' ? 'left' : 'right';
		}}
	>
		go to {options.direction === 'right' ? 'left' : 'right'}</button
	>
	<button
		on:click={() => {
			options.speedFactor = options.speedFactor() === 1 ? () => 0 : () => 1;
		}}
	>
		{options.speedFactor() === 1 ? 'stop' : 'start'}</button
	>

	<button
		on:click={() => {
			options.gap = options.gap === 25 ? 50 : 25;
		}}>cycle gap : {options.gap}</button
	>
</div>
