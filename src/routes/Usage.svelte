<script lang="ts">
	import Marqueeck from '@arisbh/marqueeck';
	import { CodeBlock, TabGroup, Tab, Table, tableMapperValues } from '@skeletonlabs/skeleton';
</script>

<!-- ! Tab Panel - USAGE --->
<div class="space-y-2">
	<div class="container">
		<h2 class="mb-4">Basic usage</h2>
	</div>
	<Marqueeck>Hello Marqueeck</Marqueeck>

	<div class="container">
		<CodeBlock
			language="html"
			code={`
<script>
	import Marqueeck from '@arisbh/marqueeck';
</script>

<Marqueeck>Hello Marqueeck</Marqueeck>
		`}
		/>

		<p>
			You can throw any element in <code>Marqueeck</code>, solo or grouped, a simple div or another
			svelte component, or even just plain text, for the sake of simplicity.
		</p>
		<p>
			You element will be automaticaly repeated inside the component, auto-updating the number of
			elements based on screen's width
		</p>
	</div>
</div>

<div class="space-y-2 pt-8">
	<div class="container">
		<h3 class="mb-2">Advanced configuration</h3>
		<h4 class="mb-2">Sticky element</h4>
	</div>

	<Marqueeck>
		Marqueeck
		<svelte:fragment slot="sticky">
			<strong>Hello</strong>
		</svelte:fragment>
	</Marqueeck>

	<div class="container">
		<CodeBlock
			language="html"
			code={`
<Marqueeck >
	Marqueeck
	<svelte:fragment slot="sticky">
		<strong>Hello</strong>
	</svelte:fragment>
</Marqueeck>
		`}
		/>
		<div class="!mt-4 max-w-3xl space-y-2">
			<p>
				You can use the reserved <code>svelte:fragment</code> to place a sticky element inside the component.
			</p>
			<p>Customize its placement with the <code>stickyPosition</code> key inside options.</p>
		</div>
	</div>
</div>
