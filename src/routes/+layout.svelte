<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import 'highlight.js/styles/github-dark.css';
	import hljs from 'highlight.js';
	import { AppShell, storeHighlightJs } from '@skeletonlabs/skeleton';
	import Header from './Header.svelte';

	storeHighlightJs.set(hljs);
</script>

<AppShell
	slotPageHeader="px-4 py-8 container mx-auto flex gap-16 gap-y-8 flex-wrap items-baseline md:flex-nowrap"
>
	<svelte:fragment slot="pageHeader">
		<Header />
	</svelte:fragment>
	<div class="space-y-12 my-2">
		<slot />
	</div>
</AppShell>
