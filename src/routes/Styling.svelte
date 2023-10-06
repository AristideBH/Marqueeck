<script>
	import Marqueeck from '$lib/index.ts';
	import { CodeBlock, TabGroup, Tab, Table, tableMapperValues } from '@skeletonlabs/skeleton';
</script>

<blockquote class="container">
	Marqueeck comes with minimal style integration, giving you the flexibility to use your prefered
	classes and styling paradigm.
</blockquote>
<div class="space-y-2">
	<div class="container">
		<h3 class="mb-2">Slotted component</h3>
		<p>
			You have full control over the element you're slotting inside Marqueeck, therefore you can
			style it as you want. <br /> Drop a complex flex layout, a custom Svelte component, a simple icon
			or anything, you choose what you use, and style it the way you want !
		</p>
	</div>
	<Marqueeck options={{ gap: 56, padding: { x: 20, y: 25 } }}>
		<div class="flex gap-2 items-end leading-4">
			<span class="flex flex-col">
				<strong>Hello</strong> <i>custom</i>
			</span>
			<span class="text-3xl translate-y-1">Marqueeck</span>
		</div>
	</Marqueeck>

	<div class="container">
		<CodeBlock
			language="html"
			code={`
<Marqueeck options={{ gap: 56, paddingY_Wrapper: 25 }}>
	<div class="flex gap-2 items-end leading-4"> // Here we're using Tailwind classes
		<span class="flex flex-col">
			<strong>Hello</strong> <i>custom</i>
		</span>
		<span class="text-3xl translate-y-1">Marqueeck</span>
	</div>
</Marqueeck>
		`}
		/>
	</div>
</div>

<div class="space-y-2">
	<div class="container">
		<h3>Using CSS Variables</h3>
		<p>
			You can directly pass CSS variables for the background and text colors, using any CSS
			authorized colors (name, hex, hsl, etc...) :
		</p>
	</div>
	<Marqueeck
		--marqueeck-bg-color={'rgb(var(--color-primary-700))'}
		--marqueeck-text-color={'rgb(164, 217, 205)'}
		class="mt-2"
	>
		CSS Variables
	</Marqueeck>
	<div class="container">
		<CodeBlock
			language="html"
			code={`
<Marqueeck 
	--marqueeck-bg-color={'rgb(var(--color-primary-700))'}
	--marqueeck-text-color={'rgb(164, 217, 205)'}>
	CSS Variables
</Marqueeck>`}
		/>
		<p class="my-4">Or define them globaly like so :</p>
		<CodeBlock
			language="css"
			code={`
	:root {
	--marqueeck-bg-color: #a4d9cd;
	--marqueeck-text-color: #0b8c61;
}`}
		/>
	</div>
</div>

<div class="space-y-2 container">
	<h3 class="mb-2">Using classes props</h3>
	<p>
		Marqueeck provides props to style its barebone structure and the default <code>class</code> tag.
	</p>
	<ul class="list-disc pl-6 space-y-1">
		<li>
			Default <strong>class</strong> is use to style the parent of your repeated element.
			<br />Its gap property is automaticaly inherited from <code>options</code> and is use to
			properly calculate the needed number of elements. Please do not redefined it here and use the
			<code>gap</code>
			property in <code>options</code>.
			<br />
			<blockquote>
				This is the animated element, please do not apply any <code>transform</code> to it.
			</blockquote>
		</li>
		<li>
			<strong>ribbonRegion</strong> is use to style the parent of your repeated element.
			<br />Its gap property is automaticaly inherited from <code>options</code> and is use to
			properly calculate the needed number of elements. Please do not redefined it here and use the
			<code>gap</code>
			property in <code>options</code>.
			<br />This is the animated element, please do not apply any <code>transform</code> to it.
		</li>
		<li>
			<strong>childRegion</strong> is use to style your repeated element. <br /> You have full control
			here and no styling restriction.
		</li>
		<li>
			<strong>stickyRegion</strong> is use to style the sticky <code>svelte:fragment</code>.
			<br /> Its inline paddings are set automaticaly from <code>options</code> but you're free to edit
			them.
		</li>
	</ul>
</div>

<div class="space-y-2 container">
	<h3 class="mb-2">Adding a separator</h3>
	<blockquote>... writing documentation ...</blockquote>
</div>

<div class="space-y-2 container">
	<h3 class="mb-2">Default styles</h3>
	<p>
		Although Marqueeck has a minimal styling approach, it still needs a few CSS lines to operate.
	</p>
	<CodeBlock
		language="css"
		code={`

.marqueeck-wrapper {
	width: 100%;
	background-color: var(--marqueeck-bg-color);
	color: var(--marqueeck-text-color);
	display: flex;
	flex-flow: row nowrap;
	overflow-x: hidden;
	position: relative;
	--ribbonXpos: 0px;
}

.marqueeck-ribbon {
	display: inherit;
	flex-flow: inherit;
	gap: inherit;
	position: inherit;
	transform: translateX(var(--ribbonXpos));
	will-change: transform;
}

.marqueeck-child {
	display: inline;
	width: max-content;
}

.marqueeck-sticky {
	position: absolute;
	background-color: var(--marqueeck-bg-color);
	width: -moz-fit-content;
	width: fit-content;
}

`}
	/>
</div>

<style global>
	/* SEPEARATOR DEMO */
	span.withSep {
		display: flex;
		gap: 16px;
	}
	span.withSep:before {
		content: '|';
	}
</style>
