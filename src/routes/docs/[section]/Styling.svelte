<script>
	import { CodeBlock } from 'svhighlight';
	import Marqueeck from '$lib/package';
</script>

<h2>Slotted component</h2>

<p>
	You have full control over the element you are slotting inside Marqueeck, therefore you can style
	it as you want. Drop a complex flex layout, another Svelte component, a simple icon or anything...
	You choose what you use, and style it the way you want !
</p>
<Marqueeck class="!py-8">
	<div class="flex items-end gap-2 leading-4">
		<span class="flex flex-col">
			<strong>Hello</strong> <i>custom</i>
		</span>
		<span class="text-3xl translate-y-1">Marqueeck</span>
	</div>
</Marqueeck>
<CodeBlock
	language="svelte"
	code={`<Marqueeck class="!py-8">
	<!-- Using Tailwind classes -->
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
	You can directly pass CSS variables for the background and text colors, and also for the vertical
	paddings, using any CSS appropriate propreties.
</p>
<Marqueeck
	--marqueeck-bg-color="hsl(var(--foreground))"
	--marqueeck-text-color="hsl(var(--background))"
	--marqueeck-padding-y="0.5rem">CSS Variables</Marqueeck
>

<CodeBlock
	language="svelte"
	code={`<Marqueeck 
	--marqueeck-bg-color="rgb(255, 255, 255)" 
	--marqueeck-text-color="hsl(var(--background))"
	--marqueeck-padding-y="0.5rem">
	CSS Variables
</Marqueeck>`}
/>
<p class="mt-2">Or define them globaly for all Marqueecks in your project :</p>
<CodeBlock
	language="css"
	code={`:root {
	--marqueeck-bg-color: hsl(var(--primary));
	--marqueeck-text-color: hsl(var(--background));
	--marqueeck-padding-y: 0.5rem;
}`}
/>

<h2>Marqueeck default structure</h2>

<h3>Treeview</h3>
<CodeBlock
	language="less"
	headerText="STRUCTURE"
	code={`├─ div|marquee [data-marqueeck-wrapper]
│  ├─ div [data-marqueeck-ribbon] => animated element
│  │  ├─ span [data-marqueeck-child] 
│  │  │  ├─ chosenTag ("Your content")
│  │  │  └─ div [data-marqueeck-separator] ("Separator")
│  │  ├─ span [data-marqueeck-child, aria-hidden]
│  │  │  ├─ chosenTag ("Your content")
│  │  │  └─ span [data-marqueeck-separator] ("Separator")
│  │  └─ ...
│  ├─ div [data-marqueeck-sticky.start] ("StickyStart content")
│  └─ div [data-marqueeck-sticky.end] ("StickyEnd content")
`}
/>

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
			This is the animated element, please do not apply any transform proprety to it.
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
	<li>
		<p><b>hoverClasses</b> is used to set arbitrary classes to the wrapper when it is hovered.</p>
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
	position: relative;
	width: 100%;
	padding-inline: var(--marqueeck-x-pad);
	padding-block: var(--marqueeck-padding-y);
	background-color: var(--marqueeck-bg-color);
	color: var(--marqueeck-text-color);
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
	height: stretch;
	display: inline-flex;
	align-items: center;
	background-color: inherit;
	color: inherit;
}

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
