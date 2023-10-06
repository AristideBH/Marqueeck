<script lang="ts">
	import Marqueeck, { type MarqueeckOptions } from '$lib';
	const options: MarqueeckOptions = {
		debug: true,
		staggerChild: true,
		staggerDuration: 25
	};
</script>

<Marqueeck {options} />
<Marqueeck {options} --marqueeck-text-color="red"></Marqueeck>

<style>
	:root {
		--marqueeck-bg-color: #a4d9cd;
		--marqueeck-text-color: #0b8c61;
	}
</style>
