<script lang="ts">
	import Marqueeck from '$lib/package/index.js';
	import { type MarqueeckOptions } from '$lib/package/index.js';

	let options: MarqueeckOptions = {
		gap: 25,
		direction: 'right',
		speed: 100,
		paddingX: 25,
		hoverSpeed: 5
	};
</script>

<div class="overflow-hidden min-h-[100dvh] pt-[24vh] flex flex-col gap-[1vh]">
	<Marqueeck {options} class="bg-foreground text-background">
		<h1 class="text-2xl italic font-semibold">Marqueeck</h1>
		<svelte:fragment slot="separator">✱</svelte:fragment>
		<!-- <svelte:fragment slot="stickyStart">Hello,</svelte:fragment>
		<svelte:fragment slot="stickyEnd">Goodbye</svelte:fragment> -->
	</Marqueeck>

	<button
		on:click={() => {
			options.direction = 'left';
		}}>left</button
	>
	<button
		on:click={() => {
			options.direction = 'right';
		}}>right</button
	>
</div>
