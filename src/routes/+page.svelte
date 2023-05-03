<script lang="ts">
	import Marqueeck from '@arisbh/marqueeck';
	import { CodeBlock, TabGroup, Tab, Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';
	let tabSet: number = 2;

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
		head: ['Name', 'Type', 'Value', 'Description'],
		// The data visibly shown in your table body UI.
		body: tableMapperValues(sourceData, ['name', 'type', 'value', 'description']),
		// Optional: The data returned when interactive is enabled and a row is clicked.
		meta: tableMapperValues(sourceData, ['name', 'type', 'value', 'description'])
	};
</script>

<svelte:head>
	<title>Marqueeck - A custom marquee component for Sveltekit</title>
</svelte:head>

<!-- INSTALL COMMAND -->
<CodeBlock language="install" code={`npm i @arisbh/marqueeck`} />

<TabGroup regionPanel="space-y-8 pb-8" regionList="bg-surface-50 sticky top-0 z-40">
	<Tab bind:group={tabSet} name="tab1" value={0}>Usage</Tab>
	<Tab bind:group={tabSet} name="tab2" value={1}>Options</Tab>
	<Tab bind:group={tabSet} name="tab3" value={2}>Styling</Tab>
	<Tab bind:group={tabSet} name="tab4" value={3}>Events</Tab>

	<!-- Tab Panels --->
	<svelte:fragment slot="panel">
		{#if tabSet === 0}
			<!-- ! Tab Panel - USAGE --->
			<div class="space-y-2">
				<h2 class="mb-4">Basic usage</h2>

				<Marqueeck>Hello Marqueeck</Marqueeck>

				<CodeBlock
					language="svelte"
					code={`
<script>
	import Marqueeck from '@arisbh/marqueeck';
</script>

<Marqueeck>Hello Marqueeck</Marqueeck>
	`}
				/>
				<div class="!mt-4 max-w-3xl space-y-2">
					<p>
						You can throw any element in <code>Marqueeck</code>, solo or grouped, a simple div or
						another svelte component, or even just plain text, for the sake of simplicity.
					</p>
					<p>
						You element will be automaticaly repeated inside the component, auto-updating the number
						of elements based on screen's width
					</p>
				</div>
			</div>

			<div class="space-y-2 pt-8">
				<h3 class="mb-2">Advanced configuration</h3>

				<h4 class="mb-2">Sticky element</h4>

				<Marqueeck>
					Marqueeck
					<svelte:fragment slot="sticky">
						<strong>Hello</strong>
					</svelte:fragment>
				</Marqueeck>

				<CodeBlock
					language="svelte"
					code={`
<Marqueeck >
	Marqueeck
	<svelte:fragment slot="sticky">
		<strong>Hello</strong>
	</svelte:fragment>
</Marqueeck>`}
				/>
				<div class="!mt-4 max-w-3xl space-y-2">
					<p>
						You can use the reserved <code>svelte:fragment</code> to place a sticky element inside the
						component.
					</p>
					<p>Customize its placement with the <code>stickyPosition</code> key inside options.</p>
				</div>
			</div>
		{:else if tabSet === 1}
			<!-- ! Tab Panel - OPTIONS --->

			<div class="space-y-2">
				<p>You can either pass your options directly in the <code>Marqueeck</code> component :</p>
				<CodeBlock
					language="svelte"
					code={`
<Marqueeck options={{ direction: 'right' }}>
	[Your element]
</Marqueeck>
					`}
				/>
				<p>
					or by constructing a <code>MarqueeckOptions</code> object, using the provided
					<code>MarqueeckOptions</code> type :
				</p>
				<CodeBlock
					language="svelte"
					code={`
<script>
	const options = {
		speed: 32,
		direction: 'right',
		// ...
	};
</script>

<Marqueeck {options}>[Your element]</Marqueeck>
				`}
				/>
			</div>

			<div class="space-y-4">
				<p class="mt-8">
					If you don't pass any options to the <code>Marqueeck</code> element, it will use the following
					options.
				</p>
				<Table source={tableSimple} />
			</div>
		{:else if tabSet === 2}
			<!-- ! Tab Panel - STYLING --->

			<blockquote>
				Marqueeck comes with minimal style integration, giving you the flexibility to use your
				prefered classes and styling paradigm.
			</blockquote>
			<div class="space-y-2">
				<h3 class="mb-2">Slotted component</h3>
				<p>
					You have full control over the element you're slotting inside Marqueeck, therefore you can
					style it as you want.
				</p>
				<p>
					Drop a complex flex layout, a custom Svelte component, a simple icon or anything, you
					choose what you use, and style it the way you want !
				</p>
				<Marqueeck options={{ gap: 56, paddingY_Wrapper: 25 }}>
					<div class="flex gap-2 items-end leading-4">
						<span class="flex flex-col">
							<strong>Hello</strong> <i>custom</i>
						</span>
						<span class="text-3xl translate-y-1">Marqueeck</span>
					</div>
				</Marqueeck>

				<CodeBlock
					language="svelte"
					code={`
<Marqueeck options={{ gap: 56, paddingY_Wrapper: 25 }}>
	<div class="flex gap-2 items-end leading-4">
		<span class="flex flex-col">
			<strong>Hello</strong> <i>custom</i>
		</span>
		<span class="text-3xl translate-y-1">Marqueeck</span>
	</div>
</Marqueeck>`}
				/>
			</div>

			<div class="space-y-2">
				<h3>Styling via CSS Variables</h3>
				<p>
					You can directly pass CSS variables for the background and text colors, using any CSS
					authorized colors (name, hex, hsl, etc...) :
				</p>
				<Marqueeck
					--bg-color={'rgb(164, 217, 205)'}
					--text-color={'rgb(var(--color-primary-700))'}
					class="mt-2"
				>
					CSS Variables
				</Marqueeck>
				<CodeBlock
					language="svelte"
					code={`
<Marqueeck 
	--bg-color={'rgb(164, 217, 205)'} 
	--text-color={"rgb(var(--color-primary-700))"}>
	CSS Variables
</Marqueeck>`}
				/>
			</div>

			<div class="space-y-2">
				<h3 class="mb-2">Using classes props</h3>
				<p>
					Marqueeck provides 3 props to style its barebone structure and the default <code
						>class</code
					> tag.
				</p>
				<ul>
					<li><code>ribbonClasses</code> is use to style the parent of your repeated element.</li>
				</ul>
			</div>
		{:else if tabSet === 3}
			<!-- ! Tab Panel - EVENTS --->
			<code>[to document...]</code>
		{/if}
	</svelte:fragment>
</TabGroup>
