<script lang="ts">
	import { TabGroup, Tab } from '@skeletonlabs/skeleton';
	import Usage from './Usage.svelte';
	import Options from './Options.svelte';
	import Styling from './Styling.svelte';
	import Events from './Events.svelte';

	let tabSet: number = 0;
</script>

<svelte:head>
	<title>Marqueeck - A custom marquee component for Sveltekit</title>
</svelte:head>

<TabGroup regionPanel="space-y-8 pb-8" regionList="bg-surface-50 sticky top-0 z-40 container !py-0">
	<Tab bind:group={tabSet} name="tab1" value={0}>Usage</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>Options</Tab>
	<Tab bind:group={tabSet} name="tab3" value={2}>Styling</Tab>
	<Tab bind:group={tabSet} name="tab4" value={3}>Events</Tab>
	<Tab bind:group={tabSet} name="tab5" value={4}>Infos</Tab>

	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			<Usage />
		{:else if tabSet === 1}
			<Options />
		{:else if tabSet === 2}
			<Styling />
		{:else if tabSet === 3}
			<Events />
		{:else if tabSet === 4}
			<div class="container">
				<h2>Informations</h2>
				<blockquote class="!mt-4">...writing documentation...</blockquote>
			</div>
		{/if}
	</svelte:fragment>
</TabGroup>

<style>
	:global(.tab-list label:last-of-type) {
		margin-left: auto;
	}
</style>
