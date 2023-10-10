<script lang="ts">
	import Marqueeck, { type MarqueeckOptions, factorDamper, scrollHandler, scrollState } from '$lib';
	import { fly, slide, fade, blur } from 'svelte/transition';

	let options: MarqueeckOptions;
	$: options = {
		debug: false,
		childStaggerDuration: 45,
		childTransition: blur,
		speedFactor: factorDamper($scrollState.velocity, 5),
		stickyPosition: 'start'
	};
</script>

<Marqueeck {options}>
	<svelte:fragment slot="sticky">
		<strong>HELLO</strong>
	</svelte:fragment>
</Marqueeck>

<div class="scroll-area" on:scroll={scrollHandler}>
	<div class="tall" />
</div>

<style>
	:root {
		--marqueeck-bg-color: #a4d9cd;
		--marqueeck-text-color: #0b8c61;
	}
	.scroll-area {
		max-height: 200px;
		overflow: auto;
	}

	.tall {
		height: 2000px;
	}
</style>
