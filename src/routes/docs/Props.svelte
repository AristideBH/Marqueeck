<script lang="ts">
	import { CodeBlock } from 'svhighlight';
	import Marqueeck from '$lib/package';
</script>

<h2>Options</h2>
<h3>Custom options</h3>
<p>You can either pass your options directly in the Marqueeck component.</p>

<CodeBlock
	language="svelte"
	code={`<script>
	import Marqueeck from '@arisbh/marqueeck';
<script/>

<Marqueeck options={{ direction: "left" }}>
	[Your element] 
</Marqueeck>`}
/>

<p>Or you can construct a MarqueeckOptions object, using the provided MarqueeckOptions type :</p>
<CodeBlock
	language="svelte"
	code={`<script lang="ts">
	import Marqueeck, { type MarqueeckOptions } from '@arisbh/marqueeck';
	
	const options = {
		direction: "left",
		//...
	};
<script/>

<Marqueeck {options}>
	[Your element] 
</Marqueeck>`}
/>

<h3>Default MarqueeckOptions</h3>
<p>If you don't pass any options to the Marqueeck element, it will use the following options.</p>
<blockquote class="mt-1">Editing documentation...</blockquote>

<h3>In depth</h3>
<blockquote class="mt-1">Editing documentation...</blockquote>
<!-- <h4>speedFactor</h4> -->

<h2>Still</h2>
<p>
	A marquee is by default an animated HTML tag. However, you might need the repeated effect without
	any translation of the position.
</p>
<p>Setting this prop will prevent the animating function to run.</p>
<Marqueeck still class="my-4">[Your element]</Marqueeck>
<CodeBlock
	language="svelte"
	code={`<Marqueeck still>
	[Your element] 
</Marqueeck>`}
/>

<h2>Extend</h2>
<p>
	By default, Marqueeck will bleed out to its sides. This is intended behaviour as you might need to
	apply a rotation to the component. This ensure its really fill your parent element.
</p>
<p>
	If you want to get rid of this behaviour, set the <code>extend</code> prop to <code>false</code>.
</p>
<blockquote class="mt-1">
	You can set <code>overflow-x: hidden;</code> to the parent element to keep the prop active and still
	crop to the good width.
</blockquote>
<Marqueeck extend={false} class="my-4">[Your element]</Marqueeck>
<CodeBlock
	language="svelte"
	code={`<Marqueeck extend={false}>
	[Your element] 
</Marqueeck>`}
/>

<h2>Classes</h2>
<p>View the <code>Styling</code> tab to know more about classes.</p>
