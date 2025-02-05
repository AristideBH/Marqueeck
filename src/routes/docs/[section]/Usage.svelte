<script>
	import { CodeBlock } from 'svhighlight';
	import Marqueeck from '$lib/package';
</script>

<h2>Installation</h2>
<p>Use your preferred node package manager.</p>
<div class="flex flex-col gap-y-1">
	<p><code>npm i @arisbh/marqueeck </code></p>
	<p><code>pnpm add @arisbh/marqueeck </code></p>
	<p><code>yarn add @arisbh/marqueeck</code></p>
</div>

<h2>Usage</h2>
<p>
	You can throw any element in Marqueeck, solo or grouped, a simple div or another Svelte component,
	or even just plain text for the sake of simplicity.
</p>
<p>
	Your element will automaticaly be repeated inside the component, auto-updating the number of
	needed elements to fill its parent.
</p>
<p>Import the <code>Marqueeck</code> component, and wrap your content with it.</p>

<Marqueeck class="my-4">Hello Marqueeck</Marqueeck>
<CodeBlock
	language="svelte"
	code={`<script>
	import Marqueeck from '@arisbh/marqueeck';
</script>

<Marqueeck> Hello Marqueeck </Marqueeck>`}
/>

<h2>Advanced configuration</h2>

<h3>Sticky elements</h3>
<p>
	You can use the reserved <code>svelte:fragment</code> to place a sticky element inside your component.
</p>
<Marqueeck class="my-4">
	Marqueeck
	<svelte:fragment slot="stickyStart">Hello</svelte:fragment>
	<svelte:fragment slot="stickyEnd">Component</svelte:fragment>
</Marqueeck>
<CodeBlock
	language="svelte"
	code={`<Marqueeck>
	Marqueeck
	<svelte:fragment slot="stickyStart">Hello</svelte:fragment>
	<svelte:fragment slot="stickyEnd">Component</svelte:fragment>
</Marqueeck>`}
/>

<h3>Separator</h3>
<p>
	You can use the reserved <code>svelte:fragment</code> to place a separator between your repeated components.
</p>
<Marqueeck class="my-4">
	Marqueeck
	<svelte:fragment slot="separator">✱</svelte:fragment>
</Marqueeck>
<CodeBlock
	language="svelte"
	code={`<Marqueeck>
	Marqueeck
	<svelte:fragment slot="separator">✱</svelte:fragment>
</Marqueeck>`}
/>

<h2>Learn more</h2>
<p>
	Check the <a href="/docs/props">Props</a> or <a href="/docs/events">Events</a> pages for more information.
</p>
