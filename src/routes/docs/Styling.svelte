<script>
	import { CodeBlock } from 'svhighlight';
	import Marqueeck from '$lib/package';
</script>

<h2>Slotted component</h2>

<p>
	You have full control over the element you're slotting inside Marqueeck, therefore you can style
	it as you want. Drop a complex flex layout, a custom Svelte component, a simple icon or anything,
	you choose what you use, and style it the way you want !
</p>
<Marqueeck class="py-5">
	<div class="flex items-end gap-2 leading-4">
		<span class="flex flex-col">
			<strong>Hello</strong> <i>custom</i>
		</span>
		<span class="text-3xl translate-y-1">Marqueeck</span>
	</div>
</Marqueeck>
<CodeBlock
	language="svelte"
	code={`<Marqueeck class="py-5">
	<!-- Here we're using Tailwind classes -->
	<div class="flex items-end gap-2 leading-4">
		<span class="flex flex-col">
			<strong>Hello</strong> <i>custom</i>
		</span>
		<span class="text-3xl translate-y-1">Marqueeck</span>
	</div>
</Marqueeck>`}
/>

<h2>CSS Variable</h2>
<p>
	You can directly pass CSS variables for the background and text colors, using any CSS authorized
	colors (name, hex, hsl, etc...) :
</p>
<!-- todo: fix variable not applying -->
<Marqueeck
	--marqueeck-bg-color={'rgb(var(--color-primary-700))'}
	--marqueeck-text-color={'rgb(164, 217, 205)'}
>
	CSS Variables
</Marqueeck>

<CodeBlock
	language="svelte"
	code={`<Marqueeck 
	--marqueeck-bg-color={'rgb(var(--color-primary-700))'}
	--marqueeck-text-color={'rgb(164, 217, 205)'}>
	CSS Variables
</Marqueeck>`}
/>
<p>Or define them globaly in your project :</p>
<CodeBlock
	language="css"
	code={`:root {
	--marqueeck-bg-color: #a4d9cd;
	--marqueeck-text-color: #0b8c61;
}`}
/>

<h2>Marqueeck default structure</h2>

<h3>Treeview</h3>
<blockquote class="mt-1">Editing documentation...</blockquote>

<h3>Classes props</h3>
<p>Marqueeck provides props to style its barebone structure and the default class tag.</p>
<ul>
	<li>
		<p>
			<b>Default class</b> on the <code>Marqueeck</code> component is used to style the wrapper of the
			element.
		</p>
	</li>
	<li>
		<p><b>ribbonClasses</b> is used to style the parent of your repeated element.</p>
		<p>
			Its gap property is automaticaly inherited from options and is use to properly calculate the
			needed number of elements. Please do not redefined it here and use the gap property in
			options.
		</p>
		<blockquote class="mt-1">
			This is the animated element, please do not apply any transform to it.
		</blockquote>
	</li>
	<li>
		<p><b>childClasses</b> is used to style your repeated element.</p>
		<p>You have full control here and no styling restriction.</p>
	</li>
	<li>
		<p><b>stickyClasses</b> is used to style the sticky <code>svelte:fragment</code>.</p>
		<p>Its inline paddings are set automaticaly from options but you're free to edit them.</p>
	</li>
	<li>
		<p><b>separatorClasses</b> is used to style the separator <code>svelte:fragment</code>.</p>
	</li>
</ul>

<h3>Default styles</h3>
<p>
	Although Marqueeck has a minimal styling approach, it still needs a bit of CSS to operate
	proprely.
</p>
<CodeBlock
	language="css"
	code={`/* * Wrapper */
[data-marqueeck-wrapper] {
	display: flex;
	flex-flow: row nowrap;
	overflow: hidden;
	width: 100%;
	padding-inline: calc(var(--marqueeck-x-pad) * 1);
}

[data-marqueeck-wrapper].extend {
	width: calc(100% + 2 * var(--marqueeck-x-pad, 0));
	margin-inline: calc(-1 * var(--marqueeck-x-pad, 0));
	padding-inline: calc(var(--marqueeck-x-pad) * 2);
}

/* * Ribbon */
[data-marqueeck-ribbon] {
	display: inherit;
	flex-flow: inherit;
	gap: inherit;
	transform: translateX(var(--ribbonXpos));
	will-change: transform;
	transition: gap 0.3s ease-out;
}

/* * Children */
[data-marqueeck-child] {
	display: inline-flex;
	width: max-content;
	gap: inherit;
}

/* * Stickies */
[data-marqueeck-sticky] {
	position: absolute;
	padding-inline: var(--marqueeck-x-pad);
	width: fit-content;
	background-color: inherit;
	color: inherit;
	height: 100%;
	top: 0;
	bottom: 0;
	display: inline-flex;
	align-items: center;
}
/* todo: fix FOUC on load */

[data-marqueeck-sticky].start {
	padding-inline-start: calc(2 * var(--marqueeck-x-pad));
}

[data-marqueeck-sticky].end {
	padding-inline-end: calc(2 * var(--marqueeck-x-pad));
}

/* * Separator */
[data-marqueeck-separator] {
	width: fit-content;
	height: 100%;
	display: inline-flex;
	align-items: center;
	user-select: none;
}
	
`}
/>
