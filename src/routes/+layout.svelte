<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/all.css';
	import '../app.postcss';

	import 'highlight.js/styles/github-dark.css';
	import hljs from 'highlight.js';
	import { AppShell, CodeBlock, storeHighlightJs } from '@skeletonlabs/skeleton';
	storeHighlightJs.set(hljs);
</script>

<AppShell
	slotPageHeader="px-4 py-8 container mx-auto flex gap-16 flex-wrap items-baseline md:flex-nowrap"
	slotPageFooter="px-4 py-2 container mx-auto"
>
	<svelte:fragment slot="pageHeader">
		<div class=" flex flex-col gap-4 w-full max-w-lg">
			<h1 class="">
				<strong>Marqueeck </strong>
				<!-- svelte-ignore missing-declaration -->
				<sup><div class="badge variant-ghost-primary">{APP_VERSION}</div></sup>
			</h1>

			<!-- INSTALL COMMAND -->
			<div class="flex gap-4 w-full md:flex-col items-start">
				<CodeBlock language="bash" code={`npm i @arisbh/marqueeck`} class="w-full" />
				<a href="https://github.com/AristideBH/Marqueeck/">
					<span class="chip variant-ghost-primary">Github page</span>
				</a>
			</div>
		</div>
		<div class="grow w-full">
			<p>
				Marqueeck is a custom marquee component for Sveltekit, speed-eased, style-free and without
				any dependencies.
			</p>
			<ul class="list-disc pl-6 mt-2">
				<li>♾️ Auto-repeat slotted elements (reactive to screen's width)</li>
				<li>🎛️ Custom speed, directions, gap, paddings, etc..</li>
				<li>🧶 Minimum styling (come with your own classes)</li>
				<li>🖱️ Custom hover interactions (stop, custom speed and event forwarding)</li>
				<li>📍 Optional sticky element (start/end)</li>
				<li>🐞 Debug mode</li>
				<li>✅ Fully typed with TypeScript</li>
			</ul>
		</div>
	</svelte:fragment>
	<div class=" space-y-12 my-2">
		<slot />
	</div>

	<svelte:fragment slot="pageFooter">
		<a href="https://github.com/AristideBH/"> @AristideBH </a>
	</svelte:fragment>
</AppShell>
