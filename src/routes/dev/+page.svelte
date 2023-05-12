<script lang="ts">
	// import Marqueeck, { type MarqueeckOptions } from '@arisbh/marqueeck';
	import Marqueeck, { type MarqueeckOptions } from '$lib/index.js';
</script>

<Marqueeck />

<style>
	/* SEPEARATOR DEMO */
	span {
		display: flex;
		gap: 16px;
	}
	span:before {
		content: '|';
	}
</style>
