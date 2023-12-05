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
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugit earum est quasi quisquam
		voluptatum sint exercitationem ex qui ad alias a cumque molestias ab eveniet velit sed, officia
		neque.
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

	{#each tabs as { value, component }}
		<Tabs.Content {value} class="mt-6 overflow-hidden">
			<svelte:component this={component} />
		</Tabs.Content>
	{/each}
</Tabs.Root>
