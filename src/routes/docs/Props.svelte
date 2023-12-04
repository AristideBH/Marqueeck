<h2>Options</h2>
<h3>Passing custom options</h3>
<p>You can either pass your options directly in the Marqueeck component.</p>
<!-- todo --> <code>...code...</code>

<p>Or you can construct a MarqueeckOptions object, using the provided MarqueeckOptions type :</p>
<!-- todo --> <code>...code...</code>

<h3>Default MarqueeckOptions</h3>
<p>If you don't pass any options to the Marqueeck element, it will use the following options.</p>
<!-- todo --> <code>...table...</code>

<h3>In depth</h3>

<h2>Still</h2>
<p>
	A marquee is by default an animated HTML tag. However, you might need the repeated effect without
	any translation of the position.
</p>
<p>Setting this prop will prevent the animating function to run.</p>
<!-- todo --> <code>...code...</code>

<h2>Extend</h2>
<p>
	By default, Marqueeck will bleed out to its sides. This is intended behaviour as you might need to
	apply a rotation to the component. This ensure its really fill your parent element.
</p>
<p>
	If you want to get rid of this behaviour, set the <code>extend</code> prop to <code>false</code>.
</p>
<blockquote class="mt-1">
	Make sure to set <code>overflow-x: hidden;</code> to the parent element.
</blockquote>

<h2>Classes</h2>
<p>View the <code>Styling</code> tab to know more about classes.</p>
