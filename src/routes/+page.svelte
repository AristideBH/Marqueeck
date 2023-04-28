<script lang="ts">
	import Marquee from '$lib/Marquee.svelte';
	import type { MarqueeOptions } from '$lib/Marquee.svelte';

	const options: MarqueeOptions = {
		speed: 350,
		direction: 'right',
		gap: 20,
		paddingWrapper: 10,
		debug: true,
		onHover: 'stop',
		gradualStopDuration: 1500,
		minSpeed: 10
	};
</script>

<Marquee options={{ direction: 'right', debug: true }} />
<Marquee {options}>SPEED</Marquee>
<Marquee options={{ debug: true }}>
	<a href="/">ABCDEFGHIJKLMNOPQRSTUVWXYZ</a>
</Marquee>
