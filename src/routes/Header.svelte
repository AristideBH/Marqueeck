<script lang="ts">
	import { CodeBlock } from '@skeletonlabs/skeleton';
	import { tabSet } from './stores.js';
	import { version } from '$app/environment';
</script>

<div class=" flex flex-col gap-4 w-full max-w-md">
	<h1 class="">
		<a href="/" class="unstyled" on:click={() => ($tabSet = 0)}>
			<strong>Marqueeck</strong>
		</a>
		<sup>
			<div class="badge variant-ghost-primary">
				{version}
			</div>
		</sup>
	</h1>

	<!-- INSTALL COMMAND -->
	<div class="flex gap-4 w-full md:flex-col items-start">
		<CodeBlock language="cmd" code={`npm i @arisbh/marqueeck`} class="w-full" />
		<a href="https://github.com/AristideBH/Marqueeck/">
			<span class="chip variant-ghost-primary">Github page</span>
		</a>
	</div>
</div>
<div class="grow w-full">
	<blockquote class="text-lg">
		Marqueeck is a performant full-featured marquee component for Svelte, style-free, highly
		customizable and dependency-less.
	</blockquote>
	<ul class="list-disc pl-6 mt-2">
		<li>♾️ Auto-repeat slotted element (reactive to screen's width)</li>
		<li>🎚️ Custom speed, direction, gap, padding, easing, animation, etc..</li>
		<li>🎨 Minimal styling (come with your own classes)</li>
		<li>✨ Custom interactions via event-forwarding (hover, click)</li>
		<li>⚓ Optional sticky element</li>
		<li>🐞 Debug mode</li>
		<li>✅ Fully typed with TypeScript</li>
	</ul>
</div>
