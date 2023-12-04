<h2>Slotted component</h2>

<p>
	You have full control over the element you're slotting inside Marqueeck, therefore you can style
	it as you want. Drop a complex flex layout, a custom Svelte component, a simple icon or anything,
	you choose what you use, and style it the way you want !
</p>
<!-- todo -->
<code>...code...</code>

<h2>CSS Variable</h2>
<p>
	You can directly pass CSS variables for the background and text colors, using any CSS authorized
	colors (name, hex, hsl, etc...) :
</p>
<!-- todo -->
<code>...code...</code>
<p>Or define them globaly in your project :</p>
<!-- todo -->
<code>...code...</code>

<h2>Marqueeck default structure</h2>

<h3>Treeview</h3>
<!-- todo -->
<code>...code...</code>

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
		<p><b>stickyClasses</b> is used to style the sticky svelte:fragment.</p>
		<p>Its inline paddings are set automaticaly from options but you're free to edit them.</p>
	</li>
	<li>
		<p><b>separatorClasses</b> is used to style the separator svelte:fragment.</p>
	</li>
</ul>
<h3>Default styles</h3>
<p>
	Although Marqueeck has a minimal styling approach, it still needs a bit of CSS lines to operate.
</p>
<!-- todo -->
<code>...code...</code>
