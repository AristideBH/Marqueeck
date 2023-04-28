<script lang="ts">
	import Marquee from '$lib/Marquee.svelte';
	import type { MarqueeOptions } from '$lib/Marquee.svelte';

	const options: MarqueeOptions = {
		speed: 50,
		direction: 'right',
		gap: 20,
		paddingWrapper: 10,
		debug: false,
		onHover: 'stop',
		gradualStopDuration: 1500,
		minSpeed: 10
	};
</script>

<Marquee />

<Marquee {options}>SPEED</Marquee>

<Marquee options={{ speed: 120 }}>
	<a href="/">ABCDEFGHIJKLMNOPQRSTUVWXYZ</a>
</Marquee>
