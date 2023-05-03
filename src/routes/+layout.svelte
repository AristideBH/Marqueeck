<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';
	import 'highlight.js/styles/github-dark.css';

	import hljs from 'highlight.js';
	import { AppShell } from '@skeletonlabs/skeleton';
	import Marqueeck from '@arisbh/marqueeck';
	import { storeHighlightJs } from '@skeletonlabs/skeleton';

	storeHighlightJs.set(hljs);
</script>

<AppShell slotHeader="px-4 py-8 container mx-auto" slotPageFooter="px-4 py-2 container mx-auto">
	<svelte:fragment slot="header">
		<h1 class=""><strong>Marqueeck </strong></h1>
		<a href="https://github.com/AristideBH/Marqueeck/">
			<span class="chip variant-ghost-primary">Github page</span>
		</a>
	</svelte:fragment>
	<div class="container mx-auto space-y-12 my-2 px-4">
		<slot />
	</div>

	<svelte:fragment slot="pageFooter">
		<a href="https://github.com/AristideBH/"> @AristideBH </a>
	</svelte:fragment>
</AppShell>
