<script>
	import Marqueeck from '@arisbh/marqueeck';
	import { CodeBlock } from '@skeletonlabs/skeleton';

	const handleHoverIn = () => {
		console.log('🖱️: Mouse entered Marqueeck !');
	};
	const handleHoverOut = () => {
		console.log('🖱️: Mouse leaved Marqueeck !');
	};
	const handleClick = () => {
		console.log('🖱️: You clicked the Marqueeck !');
	};
</script>

<div class="space-y-2">
	<h3>OnHover</h3>
	<Marqueeck on:hoverIn={handleHoverIn} on:hoverOut={handleHoverOut}>
		Check your console when hovering !
	</Marqueeck>
	<CodeBlock
		language="html"
		code={`
<script>
	const handleHoverIn = () => { //do what you want };
	const handleHoverOut = () => { //do what you want };
</script>

<Marqueeck on:hoverIn={ handleHoverIn } on:hoverOut={ handleHoverOut }>
	[Your element]
</Marqueeck>
    `}
	/>
</div>

<div class="space-y-2">
	<h3>OnClick</h3>
	<Marqueeck on:click={handleClick}>Check your console when clicking !</Marqueeck>
	<CodeBlock
		language="html"
		code={`
<script>
    const handleClick = () => {
		//do what you want
	};
</script>

<Marqueeck on:click={ handleClick }>[Your element]</Marqueeck>
    `}
	/>
</div>
