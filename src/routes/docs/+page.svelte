<script lang="ts">
	import { writable } from '@macfja/svelte-persistent-store';
	import * as Tabs from '$lib/components/ui/tabs';
	import Usage from './Usage.svelte';
	import Props from './Props.svelte';
	import Styling from './Styling.svelte';
	import Events from './Events.svelte';
	import About from './About.svelte';
	import Helpers from './Helpers.svelte';

	const tabs = [
		{ label: 'Usage', value: 'usage', component: Usage },
		{ label: 'Props', value: 'props', component: Props },
		{ label: 'Events', value: 'events', component: Events },
		{ label: 'Styling', value: 'styling', component: Styling },
		{ label: 'Helpers', value: 'helpers', component: Helpers },
		{ label: 'About', value: 'about', component: About }
	];

	let selected = writable('docs-tab', tabs[0].value);
</script>

<section>
	<h2>What does it do ?</h2>
	<p>
		Elaimant is a simple Sveltekit component that applies a magnetic attraction effect to the
		provided element it wraps, based on the mouse position. Here’s a quick demo/playground in Svelte
		REPL
	</p>
</section>

<Tabs.Root value={$selected} class="w-full">
	<Tabs.List class="w-full">
		{#each tabs as { value, label }}
			<Tabs.Trigger
				on:click={() => {
					$selected = value;
				}}
				class={label === 'About' ? 'ml-auto' : ''}
				{value}>{label}</Tabs.Trigger
			>
		{/each}
	</Tabs.List>

	{#each tabs as { label, value, component }}
		<Tabs.Content {value} class="mt-6">
			<svelte:component this={component} />
		</Tabs.Content>
	{/each}
</Tabs.Root>
