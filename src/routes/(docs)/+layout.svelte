<script lang="ts">
	import '../../app.postcss';

	import 'highlight.js/styles/github-dark.css';
	import hljs from 'highlight.js';
	import xml from 'highlight.js/lib/languages/xml';
	import css from 'highlight.js/lib/languages/css';
	import javascript from 'highlight.js/lib/languages/javascript';
	import typescript from 'highlight.js/lib/languages/typescript';

	import { AppShell, storeHighlightJs } from '@skeletonlabs/skeleton';
	import Header from './Header.svelte';

	hljs.registerLanguage('xml', xml); // for HTML
	hljs.registerLanguage('css', css);
	hljs.registerLanguage('javascript', javascript);
	hljs.registerLanguage('typescript', typescript);
	storeHighlightJs.set(hljs);
</script>

<AppShell
	slotPageHeader="px-4 py-8 container mx-auto flex gap-12 flex-wrap items-baseline md:flex-nowrap"
>
	<svelte:fragment slot="pageHeader">
		<Header />
	</svelte:fragment>
	<div class="space-y-12 my-2">
		<slot />
	</div>
</AppShell>

<style>
	:root {
		--marqueeck-bg-color: #a4d9cd;
		--marqueeck-text-color: #0b8c61;
		--marqueeck-width: 100% !important;
	}

	:global(.marqueeck-wrapper) {
		width: 100% !important;
	}
</style>
