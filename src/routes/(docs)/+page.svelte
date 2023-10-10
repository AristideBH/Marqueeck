<script lang="ts">
	import { TabGroup, Tab, localStorageStore } from '@skeletonlabs/skeleton';
	import Usage from './Usage.svelte';
	import Options from './Options.svelte';
	import Styling from './Styling.svelte';
	import Events from './Events.svelte';
	import Infos from './Infos.svelte';
	import Demos from './Demos.svelte';

	import { tabSet } from './stores.js';
</script>

<svelte:head>
	<title>Marqueeck - A custom marquee component for Svelte</title>
	<meta
		property="description"
		content="Marqueeck is a performant full-featured marquee component for Svelte, style-free, highly customizable and dependency-less."
	/>
</svelte:head>

<TabGroup
	regionPanel="space-y-8 pb-8"
	regionList="bg-surface-50 sticky top-0 z-40 container !py-0 !pt-2 !overflow-visible
		after:content-[''] after:absolute after:right-0 after:top-0 after:w-[500px] after:bg-surface-50 after:translate-x-[100%] after:h-full
		before:content-[''] before:absolute before:left-0 before:top-0 before:w-[500px] before:bg-surface-50 before:translate-x-[-100%] before:h-full"
>
	<Tab bind:group={$tabSet} name="tab1" value={0}>Usage</Tab>
	<Tab bind:group={$tabSet} name="tab2" value={1}>Options</Tab>
	<Tab bind:group={$tabSet} name="tab3" value={2}>Styling</Tab>
	<Tab bind:group={$tabSet} name="tab4" value={3}>Events</Tab>
	<!-- <Tab bind:group={$tabSet} name="tab5" value={4}>Demos</Tab> -->
	<Tab bind:group={$tabSet} name="tab6" value={5}>Infos</Tab>

	<svelte:fragment slot="panel">
		{#if $tabSet == 0}
			<Usage />
		{:else if $tabSet == 1}
			<Options />
		{:else if $tabSet == 2}
			<Styling />
		{:else if $tabSet == 3}
			<Events />
		{:else if $tabSet == 4}
			<Demos />
		{:else if $tabSet == 5}
			<Infos />
		{/if}
	</svelte:fragment>
</TabGroup>

<style>
	:global(.tab-list label:last-of-type) {
		margin-left: auto;
	}
</style>
