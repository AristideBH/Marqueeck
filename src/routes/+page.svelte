<script lang="ts">
	import Marqueeck from '$lib/Marqueeck.svelte';
	import type { MarqueeckOptions } from '$lib/Marqueeck.svelte';

	const options: MarqueeckOptions = {
		speed: 125,
		direction: 'left',
		onHover: 'customSpeed',
		hoverSpeed: 15,
		gradualHoverDuration: 750
	};
</script>

<Marqueeck {options} />
