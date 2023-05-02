<script lang="ts">
	import Marqueeck from '@arisbh/marqueeck';
	import { CodeBlock } from '@skeletonlabs/skeleton';
</script>

<h1 class="py-4">Marqueeck demo</h1>
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

<div class="space-y-2">
	<h2 class="mb-2">Advanced options</h2>

	<h3 class="mb-2">Sticky element</h3>

	<Marqueeck options={{ stickyPosition: 'end' }}>
		<span>Hello Marqueeck</span>
		<svelte:fragment slot="sticky">Sticky element</svelte:fragment>
	</Marqueeck>

	<CodeBlock
		language="svelte"
		code={`
	<Marqueeck options={{ stickyPosition: 'end' }}>
		<span>Hello Marqueeck</span>
		<svelte:fragment slot="sticky">Sticky element</svelte:fragment>
</Marqueeck>`}
	/>

	<h3 class="mb-2">Styling via CSS Variables</h3>

	<Marqueeck --bg-color={'red'} --text-color={'#000'}>
		<span>Hello Marqueeck</span>
	</Marqueeck>

	<CodeBlock
		language="svelte"
		code={`
	<Marqueeck --bg-color={'red'} --text-color={"#000"}>
		<span>Hello Marqueeck</span>
</Marqueeck>`}
	/>
</div>

<div class="space-y-2">
	<h2 class="mb-2">Full options</h2>

	<Marqueeck
		options={{
			speed: 50,
			direction: 'right',
			gap: 20,
			paddingX_Wrapper: 20,
			paddingY_Wrapper: 16,
			debug: false,
			onHover: 'customSpeed',
			gradualHoverDuration: 1250,
			hoverSpeed: 10,
			stickyPosition: 'start'
		}}
	>
		<span>Hello Marqueeck</span>
	</Marqueeck>

	<CodeBlock
		language="svelte"
		code={`
<script>
	const options = {
		speed: 50,
		direction: 'right',
		gap: 20,
		paddingX_Wrapper: 20,
		paddingY_Wrapper: 16,
		debug: false,
		onHover: 'customSpeed',
		gradualHoverDuration: 1250,
		hoverSpeed: 10,
		stickyPosition: 'start'
	};
</script>

<Marqueeck {options}>
		<span>Hello Marqueeck</span>
</Marqueeck>`}
	/>
</div>
