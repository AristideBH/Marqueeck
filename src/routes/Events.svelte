<script>
	import Marqueeck from '@arisbh/marqueeck';
	// import Marqueeck from '$lib/Marqueeck.svelte';
	import { CodeBlock } from '@skeletonlabs/skeleton';

	const handleHoverIn = () => {
		console.log('▶️ Mouse entered Marqueeck !');
	};
	const handleHoverOut = () => {
		console.log('⏸️ Mouse leaved Marqueeck !');
	};
	const handleClick = () => {
		console.log('🖱️ Marqueeck has been clicked !');
	};
</script>

<div class="space-y-2">
	<h3>OnHover</h3>
	<Marqueeck on:hoverIn={handleHoverIn} on:hoverOut={handleHoverOut} hoverClasses="!bg-primary-500">
		Check your console when hovering !
	</Marqueeck>
	<CodeBlock
		language="html"
		code={`
<script>
	const handleHoverIn = () => { //do what you want };
	const handleHoverOut = () => { //do what you want };
</script>

<Marqueeck 
	on:hoverIn={ handleHoverIn } 
	on:hoverOut={ handleHoverOut }
	hoverClasses="!bg-primary-500" >
	[Your element]
</Marqueeck>
    `}
	/>
</div>

<div class="space-y-2">
	<h3>OnClick</h3>
	<Marqueeck on:click={handleClick} class="cursor-pointer"
		>Check your console when clicking !</Marqueeck
	>
	<CodeBlock
		language="html"
		code={`
<script>
    const handleClick = () => {	//do what you want };
</script>

<Marqueeck on:click={ handleClick }	class="cursor-pointer">
	[Your element]
</Marqueeck>
    `}
	/>
</div>
