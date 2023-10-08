<script lang="ts">
	import Marqueeck, { type MarqueeckOptions } from '$lib';
	import { fly, slide, fade } from 'svelte/transition';
	const options: MarqueeckOptions = {
		debug: true,
		childStaggerDuration: 100,
		childTransition: slide
	};
</script>

<Marqueeck {options} />

<style>
	:root {
		--marqueeck-bg-color: #a4d9cd;
		--marqueeck-text-color: #0b8c61;
	}
</style>
