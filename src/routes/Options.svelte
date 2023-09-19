<script lang="ts">
	import Marqueeck from '@arisbh/marqueeck';
	import { CodeBlock, Table, tableMapperValues } from '@skeletonlabs/skeleton';
	import type { TableSource } from '@skeletonlabs/skeleton';

	const sourceData = [
		{
			name: 'speed',
			type: 'number',
			value: 50,
			description: 'The speed of the moving content (px/sec).'
		},
		{
			name: 'direction',
			type: "'left' | 'right'",
			value: "'left'",
			description: 'The direction of the moving content.'
		},
		{
			name: 'gap',
			type: 'number',
			value: 20,
			description: 'The distance between repeated elements (px).'
		},

		{
			name: 'onHover',
			type: "'none' | 'stop' | 'customSpeed'",
			value: "'customSpeed'",
			description: 'The behaviour when hovering the container.'
		},
		{
			name: 'speedFactor',
			type: 'number',
			value: '1',
			description:
				'The factor used to modify the speed. You can pass a function that will return any varying value.'
		},
		{
			name: 'gradualHoverDuration',
			type: 'number',
			value: 1250,
			description: "The time it takes to drop to 'customSpeed', automaticaly eased (ms)."
		},
		{
			name: 'hoverSpeed',
			type: 'number',
			value: 10,
			description: 'The speed of the moving content when hovering (px/sec).'
		},
		{
			name: 'stickyPosition',
			type: "'start' | 'end'",
			value: "'start'",
			description: 'The position of the provided sticky element.'
		},
		{
			name: 'debug',
			type: 'boolean',
			value: 'false',
			description: 'Enable console debugger for the marquee.'
		},
		{
			name: 'padding',
			type: 'object',
			value: '{x:30, y:30}',
			description: 'The default paddings for the marquee.'
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

<div class=" container flex flex-col lg:flex-row gap-10 gap-y-4">
	<div class="grow space-y-2">
		<p>You can either pass your options directly in the <code>Marqueeck</code> component :</p>
		<CodeBlock
			language="html"
			code={`
					<script lang="ts">
	import Marqueeck from '@arisbh/marqueeck';
</script>

<Marqueeck options={{ direction: 'right' }}>
	[Your element]
</Marqueeck>
				`}
		/>
	</div>
	<div class="grow space-y-2">
		<p>
			or by constructing a <code>MarqueeckOptions</code> object, using the provided
			<code>MarqueeckOptions</code> type :
		</p>
		<CodeBlock
			language="html"
			code={`
		<script>
	import Marqueeck, { type MarqueeckOptions } from '@arisbh/marqueeck';
	const options : MarqueeckOptions  = {
		direction: 'right',	// ...
	};
</script>

<Marqueeck {options}>[Your element]</Marqueeck>
			`}
		/>
	</div>
</div>

<div class="space-y-4 container">
	<h3>Default MarqueeckOptions</h3>
	<blockquote>OUTDATED as of version <code>0.1.13</code> - Please come back in a bit</blockquote>
	<p class="mt-8">
		If you don't pass any options to the <code>Marqueeck</code> element, it will use the following options.
	</p>
	<Table source={tableSimple} />
</div>
