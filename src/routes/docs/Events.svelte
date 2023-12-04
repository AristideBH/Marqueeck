<h2>onClick</h2>
<p>
	<code>Marqueeck</code> provides a event when clicking on it. When you set this prop to a function
	, Marqueeck will automatically set the appropriate <code>role</code> and
	<code>tabIndex</code> attributes for better accessibility.
</p>
<!-- todo --> <code>...code...</code>

<h2>on:hover</h2>
<p>
	Similarely to <code>onClick</code>, and event bubbles up when the mouse hovers in and out the
	component.
</p>
<p>You can check the <code>event.detail</code> to see if it is true or false.</p>
<blockquote class="mt-1">This event also trigger when the component is focused.</blockquote>
<!-- todo --> <code>...code...</code>

<h2>let:hovered</h2>
<p>
	For even more flexibility, you can retrieve the hovered state via this variable. It will return a
	boolean, making it easing to do what you want.
</p>
<!-- todo --> <code>...code...</code>
