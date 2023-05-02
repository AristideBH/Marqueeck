<script lang="ts">
	import Marqueeck from '@arisbh/marqueeck';
	import { CodeBlock, TabGroup, Tab, Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	let tabSet: number = 0;

	const sourceData = [
		{
			name: 'speed',
			type: 'number',
			value: 50,
			description: 'The speed of the moving content (px/sec)'
		},
		{
			name: 'direction',
			type: "'left' | 'right'",
			value: "'left'",
			description: 'The direction of the moving content'
		},
		{
			name: 'gap',
			type: 'number',
			value: 20,
			description: 'The distance between repeated elements (px)'
		},
		{
			name: 'paddingX_Wrapper',
			type: 'number',
			value: 20,
			description: 'The horizontal padding of the container (px)'
		},
		{
			name: 'paddingY_Wrapper',
			type: 'number',
			value: 16,
			description: 'The vertical padding of the container (px)'
		},
		{
			name: 'onHover',
			type: "'none' | 'stop' | 'customSpeed'",
			value: "'customSpeed'",
			description: 'The behaviour when hovering the container'
		},
		{
			name: 'gradualHoverDuration',
			type: 'number',
			value: 1250,
			description: "The time it takes to drop to 'customSpeed', automaticaly eased (ms)"
		},
		{
			name: 'hoverSpeed',
			type: 'number',
			value: 10,
			description: 'The speed of the moving content when hovering (px/sec)'
		},
		{
			name: 'stickyPosition',
			type: "'start' | 'end'",
			value: "'start'",
			description: 'The position of the provided sticky element'
		}
	];
	const tableSimple: TableSource = {
		// A list of heading labels.
		head: ['Name', 'Type', 'Default value', 'Description'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(sourceData, ['name', 'type', 'value', 'description']),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(sourceData, ['name', 'type', 'value', 'description'])
	};
</script>

<svelte:head>
	<title>Marqueeck - A custom marquee component for Sveltekit</title>
</svelte:head>

<h1 class="pt-12 pb-4"><strong>Marqueeck </strong></h1>
<CodeBlock language="install" code={`npm i @arisbh/marqueeck`} />

<TabGroup>
	<Tab bind:group={tabSet} name="tab1" value={0}>Usage</Tab>

	<Tab bind:group={tabSet} name="tab2" value={1}>Options</Tab>
	<Tab bind:group={tabSet} name="tab3" value={2}>Styling</Tab>

	<Tab bind:group={tabSet} name="tab4" value={3}>Event</Tab>
	<!-- Tab Panels --->

	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			<!-- ! Tab Panel --->
			<div class="space-y-2">
				<h2 class="mb-2">Basic usage</h2>

				<Marqueeck>
					<span>Hello Marqueeck</span>
				</Marqueeck>

				<CodeBlock
					language="svelte"
					code={`
<Marqueeck>
	<span>Hello Marqueeck</span>
</Marqueeck>`}
				/>
			</div>

			<div class="space-y-2 mt-6">
				<h2 class="mb-2">Advanced configuration</h2>

				<h3 class="mb-2">Sticky element</h3>

				<Marqueeck options={{ stickyPosition: 'end' }}>
					<span>Hello Marqueeck</span>
					<svelte:fragment slot="sticky"><strong>Sticky element</strong></svelte:fragment>
				</Marqueeck>

				<CodeBlock
					language="svelte"
					code={`
<Marqueeck options={{ stickyPosition: 'end' }}>
	<span>Hello Marqueeck</span>
	<svelte:fragment slot="sticky">
		<strong>Sticky element</strong>
	</svelte:fragment>
</Marqueeck>`}
				/>
			</div>
		{:else if tabSet === 1}
			<!-- ! Tab Panel --->
			<Table source={tableSimple} />
		{:else if tabSet === 2}
			<div class="space-y-6 mt-6">
				<!-- ! Tab Panel --->
				<div class="space-y-2">
					<h3 class="mb-2">Slotted component</h3>
					<code> [to document...]</code>
				</div>
				<div class="space-y-2">
					<h3 class="mb-2">Styling via CSS Variables</h3>
					<p>
						You can directly pass CSS variables for the background and text colors, using any CSS
						authorized colors (name, hex, hsl, etc...) :
					</p>
					<Marqueeck
						--bg-color={'rgb(164, 217, 205)'}
						--text-color={'rgb(var(--color-primary-700))'}
					>
						<span>Hello Marqueeck</span>
					</Marqueeck>
					<CodeBlock
						language="svelte"
						code={`
<Marqueeck --bg-color={'rgb(164, 217, 205)'} --text-color={"rgb(var(--color-primary-700))"}>
	<span>Hello Marqueeck</span>
</Marqueeck>`}
					/>
				</div>
				<div class="space-y-2">
					<h3 class="mb-2">Using classes props</h3>
					<code> [to document...]</code>
				</div>
			</div>
		{:else if tabSet === 3}
			<!-- ! Tab Panel --->
			<code>[to document...]</code>
		{/if}
	</svelte:fragment>
</TabGroup>
