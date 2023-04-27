<script lang="ts">
	import Marquee from '$lib/Marquee.svelte';
	import type { MarqueeOptions } from '$lib/Marquee.svelte';

	const options: MarqueeOptions = {
		speed: 75,
		direction: 'left',
		gap: 20,
		paddingWrapper: 10,
		debug: true,
		onHover: 'stop',
		gradualStopDuration: 1000
	};
</script>

<Marquee {options} elementClasses="white">
	<span>abcdefghijklmnopqrstuvwxyz</span>
</Marquee>

<style>
	span {
		text-transform: uppercase;
		font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
			Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
	}
</style>
