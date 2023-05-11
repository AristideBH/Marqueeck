<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { showNodeDetails } from './utils.ts'; // Assuming your utility functions are in 'marqueeUtils.ts'

	let cleanupFunction: () => void;

	onMount(() => {});

	onDestroy(() => {
		// cleanupFunction(); // Call the cleanup function to destroy any resources created by the 'useMarquee' function
	});
</script>

<div use:showNodeDetails>
	<!-- Your marquee content here -->
	<slot />
</div>
