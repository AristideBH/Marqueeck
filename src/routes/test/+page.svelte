<script lang="ts">
	import Marqueeck, { type MarqueeckOptions } from '$lib';
	import { fly, slide, fade, blur } from 'svelte/transition';

	const options: MarqueeckOptions = {
		debug: true,
		childStaggerDuration: 45,
		childTransition: blur
	};
</script>

<Marqueeck
	{options}
	on:click={() => {
		console.log('click');
	}}
/>

<style>
	:root {
		--marqueeck-bg-color: #a4d9cd;
		--marqueeck-text-color: #0b8c61;
	}
</style>
