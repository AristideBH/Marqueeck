<script lang="ts">
	import * as Table from '$lib/components/ui/table';

	const props = [
		{
			prop: 'speed',
			type: 'number (px/sec)',
			description: 'The speed of the moving content.',
			defaultValue: 75
		},
		{
			prop: 'direction',
			type: '"left" | "right"',
			description: 'The direction of the moving content.',
			defaultValue: '"right"'
		},
		{
			prop: 'gap',
			type: 'number (px)',
			description: 'The distance between repeated elements.',
			defaultValue: 20
		},
		{
			prop: 'onHover',
			type: '"none" | "stop" | "customSpeed"',
			description: 'The behaviour when hovering your element.',
			defaultValue: '"customSpeed"'
		},
		{
			prop: 'brakeDuration',
			type: 'number  (ms)',
			description: 'The eased time it takes to drop to "hoverSpeed" or to stop.',
			defaultValue: 1000
		},
		{
			prop: 'hoverSpeed',
			type: 'number (px/sec)',
			description: 'The speed of the moving content when hovering it.',
			defaultValue: 5
		},
		{
			prop: 'paddingX',
			type: 'number (px)',
			description: 'The default horizontal paddings for the marquee.',
			defaultValue: 20
		},
		{
			prop: 'childStagger',
			type: 'boolean',
			description: 'Does your repeated element transitions are staggered ?',
			defaultValue: true
		},
		{
			prop: 'childStaggerDuration',
			type: 'number (ms)',
			description: 'The time between your staggered elements appearance.',
			defaultValue: 50
		}
	];
</script>

<Table.Root>
	<Table.Header>
		<Table.Row>
			<Table.Head>Name</Table.Head>
			<Table.Head>Type</Table.Head>
			<Table.Head class="w-[350px]">Description</Table.Head>
			<Table.Head class="text-right">Default value</Table.Head>
		</Table.Row>
	</Table.Header>
	<Table.Body>
		{#each props as prop, i (i)}
			<Table.Row>
				<Table.Cell class="font-medium">{prop.prop}</Table.Cell>
				<Table.Cell>{prop.type}</Table.Cell>
				<Table.Cell>{prop.description}</Table.Cell>
				<Table.Cell class="text-right">{prop.defaultValue}</Table.Cell>
			</Table.Row>
		{/each}
	</Table.Body>
</Table.Root>
