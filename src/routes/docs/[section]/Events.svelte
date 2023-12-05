<script lang="ts">
	import { CodeBlock } from 'svhighlight';
	import Marqueeck, { type MarqueeckHoverEvent } from '$lib/package';

	const handleClick = () => {
		console.log('Clicked');
	};
	const handleHover = (e: MarqueeckHoverEvent) => {
		console.log('Hover:', e.detail);
	};
</script>

<h2>onClick</h2>
<p>
	<code>Marqueeck</code> provides a event when clicking on it. When you set this prop to a function
	, Marqueeck will automatically set <code>role="button"</code> and
	<code>tabIndex="0"</code> to the wrapper element for better accessibility.
</p>
<blockquote class="mt-1">
	This event also triggerred when the component is focused, and <code>Enter</code> or
	<code>Space</code> keys are pressed.
</blockquote>

<Marqueeck onClick={handleClick}>Check the console</Marqueeck>

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
	<Content/>
</Marqueeck>`}
/>

<h2>on:hover</h2>
<p>
	Similarely to <code>onClick</code>, an event bubbles up when the mouse hovers in and out the
	component.
</p>
<p>You can check the <code>event.detail</code> to see if it is true or false.</p>
<blockquote class="mt-1">
	This event also triggerred when the component is focused, either if bu the mouse or the keyboard.
</blockquote>

<Marqueeck on:hover={handleHover} hoverClasses="bg-primary">Check the console</Marqueeck>
<CodeBlock
	language="svelte"
	code={`<script lang="ts">
	import Marqueeck, { type MarqueeckHoverEvent } from '@arisbh/marqueeck';

	const handleHover = (e: MarqueeckHoverEvent) => { 
		console.log('Hover:', e.detail);
		// Logs true or false
	};
<script/>

<Marqueeck 
	on:hover={ handleHover }
	hoverClasses="bg-primary" >
	<Content/>
</Marqueeck>`}
/>

<h2>let:hovered</h2>
<p>
	For even more flexibility, you can retrieve the hovered state via this variable. It will return a
	boolean, making it easing to conditionnaly apply logic.
</p>

<Marqueeck let:hovered>
	{@const hoverClasses = hovered ? 'underline decoration-primary' : ''}
	<p class={hoverClasses}>Hovered</p>
</Marqueeck>

<CodeBlock
	language="svelte"
	code={`<Marqueeck let:hovered>
	{@const hoverClasses = hovered ? 'underline decoration-primary' : ''}
	<p class={hoverClasses}>Hovered</p>
</Marqueeck>`}
/>
