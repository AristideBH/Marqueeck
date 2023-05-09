<script lang="ts">
	// import Marqueeck from '@arisbh/marqueeck';
	import Marqueeck from '$lib/index.ts';
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
<div id="toc" class="flex gap-16 container flex-wrap md:flex-nowrap mt-8 w-full items-start">
	<TableOfContents
		class="  md:sticky top-10 z-10 bg-surface-50-900-token md:top-16 "
		target="#toc"
		scrollParent="#page"
		allowedHeadings="h2, h3, h4"
		label="Table of content"
		width="min-w-[220px] w-full md:min-w-unset md:w-fit"
		regionLabel="pt-4 md:!pt-0"
	/>
	<main class="min-w-[220px] w-full md:min-w-unset md:w-fit space-y-8">
		<section class="space-y-2">
			<h2 class="mb-4">Basic usage</h2>
			<p>
				You can throw any element in <code>Marqueeck</code>, solo or grouped, a simple div or
				another Svelte component, or even just plain text for the sake of simplicity.
			</p>
			<p>
				Your element will automaticaly be repeated inside the component, auto-updating the number of
				needed elements to fill its parent.
			</p>
			<Marqueeck>Hello Marqueeck</Marqueeck>
			<CodeBlock
				language="html"
				code={`
<script>
	import Marqueeck from '@arisbh/marqueeck';
</script>

<Marqueeck>Hello Marqueeck</Marqueeck>
				`}
			/>
		</section>

		<hr />

		<section class="space-y-2">
			<h2 class="mb-4">Advanced configuration</h2>
			<h3 class="mb-2">Sticky element</h3>
			<p>
				You can use the reserved <code>svelte:fragment</code> to place a sticky element inside your component.
			</p>
			<Marqueeck>
				Marqueeck
				<svelte:fragment slot="sticky">
					<strong>HELLO</strong>
				</svelte:fragment>
			</Marqueeck>
			<CodeBlock
				language="html"
				code={`
<Marqueeck >
	Marqueeck
	<svelte:fragment slot="sticky">
		<strong>HELLO</strong>
	</svelte:fragment>
</Marqueeck>
	`}
			/>
			<blockquote class="!mt-4">
				Customize its placement with the <code>stickyPosition</code> key inside
				<code>MarqueeckOptions</code>.
			</blockquote>
		</section>
		<hr />

		<section class="space-y-2">
			<h3 class="mb-2">onHover</h3>
			<p>
				By default, Marqueeck will slow down to a predefined speed when your mouse is hovering it
				(see previous demos).
			</p>
			<p>You can overide this behaviour with the <code>onHover</code> property inside options :</p>
			<ul class="list-disc ml-6">
				<li><code>none</code> : nothing will happen upon hover, the animation will continue.</li>
				<li><code>stop</code> : the component speed will smoothly stops to zero.</li>
			</ul>
			<blockquote class="!mt-4">
				<p>
					Customize the time it takes to stop or slow down the animation using the <code
						>gradualHoverDuration</code
					> proprety.
				</p>
				<p>
					To edit the minimum speed when onHover is set to <code>customSpeed</code>, use the
					<code>hoverSpeed</code> property.
				</p>
			</blockquote>
		</section>

		<hr />
		<section class="space-y-2">
			<h3 class="mb-2">speedFactor</h3>
			<p>
				Marqueeck provide a way to live-impact it speed, through the <code>speedFactor</code> proprety.
			</p>
			<blockquote class="!mt-4">...writing documentation...</blockquote>
		</section>
	</main>
</div>
