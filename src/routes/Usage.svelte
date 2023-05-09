<script lang="ts">
	import Marqueeck from '@arisbh/marqueeck';
	import {
		CodeBlock,
		TabGroup,
		Tab,
		Table,
		tableMapperValues,
		TableOfContents
	} from '@skeletonlabs/skeleton';
</script>

<!-- ! Tab Panel - USAGE --->
<div id="toc" class="flex gap-8 container flex-wrap md:flex-nowrap mt-8 w-full">
	<TableOfContents
		class="  sticky top-0 md:relative z-10 bg-surface-50-900-token"
		target="#toc"
		scrollParent="#page"
		allowedHeadings="h2, h3, h4"
		label="Table of content"
		width="min-w-[220px] w-full md:min-w-unset md:w-fit"
	/>
	<main class="flex flex-col">
		<h2>hhelo</h2>
		<h2>hhelo</h2>
		<h2>hhelo</h2>
		<h2>hhelo</h2>
		<h2>hhelo</h2>
		<section>
			<h2>hhelo</h2>
			<!-- <h3 class=" w-[2500px] max-w-full">SpeedFactor</h3> -->

			<Marqueeck>Hello Marqueeck</Marqueeck>
		</section>
		<!-- <section class="space-y-2 max-w-full">
			<h2 class="mb-4">Basic usage</h2>


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
				You can throw any element in <code>Marqueeck</code>, solo or grouped, a simple div or
				another svelte component, or even just plain text, for the sake of simplicity.
			</p>
			<p>
				You element will be automaticaly repeated inside the component, auto-updating the number of
				elements based on screen's width
			</p>
		</section>

		<section class="space-y-2 pt-8 max-w-full">
			<h2 class="mb-2">Advanced configuration</h2>
			<h3 class="mb-2">Sticky element</h3>

			<Marqueeck>
				Marqueeck
				<svelte:fragment slot="sticky">
					<strong>Hello</strong>
				</svelte:fragment>
			</Marqueeck>
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
					You can use the reserved <code>svelte:fragment</code> to place a sticky element inside the
					component.
				</p>
				<p>Customize its placement with the <code>stickyPosition</code> key inside options.</p>
			</div>
		</section>

		<section class="container max-w-ful">
			<h3>Speed and onHover</h3>
			<h3 class=" w-[2500px] max-w-full">SpeedFactor</h3>
		</section> -->
	</main>
</div>
