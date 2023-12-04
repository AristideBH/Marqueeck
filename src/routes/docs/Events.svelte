<script lang="ts">
	import { CodeBlock } from 'svhighlight';
	import Marqueeck from '$lib/package';
</script>

<h2>onClick</h2>
<p>
	<code>Marqueeck</code> provides a event when clicking on it. When you set this prop to a function
	, Marqueeck will automatically set the appropriate <code>role</code> and
	<code>tabIndex</code> attributes for better accessibility.
</p>

<!-- todo : add demo -->
<CodeBlock
	language="svelte"
	code={`<script lang="ts">
	import Marqueeck from '@arisbh/marqueeck';

	const handleClick = () => {
		console.log("Clicked");
	};
<script/>

<Marqueeck 
	onClick={handleClick}>
	[Your element]
</Marqueeck>`}
/>

<h2>on:hover</h2>
<p>
	Similarely to <code>onClick</code>, and event bubbles up when the mouse hovers in and out the
	component.
</p>
<p>You can check the <code>event.detail</code> to see if it is true or false.</p>
<blockquote class="mt-1">This event also trigger when the component is focused.</blockquote>

<!-- todo : fix return detail + add demo -->
<CodeBlock
	language="svelte"
	code={`<script lang="ts">
	import Marqueeck from '@arisbh/marqueeck';

	const handleHover = (e: CustomEvent) => { 
		console.log(e.detail)
		// Logs true or false
	};
<script/>

<Marqueeck 
	on:hover={ handleHover }
	hoverClasses="!bg-primary-500" >
	[Your element]
</Marqueeck>`}
/>

<h2>let:hovered</h2>
<p>
	For even more flexibility, you can retrieve the hovered state via this variable. It will return a
	boolean, making it easing to do what you want.
</p>
<!-- todo : add demo-->
<blockquote class="mt-1">Editing documentation...</blockquote>

<CodeBlock
	language="svelte"
	code={`<Marqueeck let:hovered>
	Hovered: {hovered}
</Marqueeck>`}
/>
