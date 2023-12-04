<script lang="ts">
	import '../app.pcss';
	import { Button } from '$lib/components/ui/button';
	import { Book, Github } from 'lucide-svelte';
	import { ModeWatcher } from 'mode-watcher';
	import { page } from '$app/stores';
</script>

<ModeWatcher />

<header class="sticky top-0 z-50 content-grid full-width bg-background">
	<div class="flex flex-wrap items-center justify-between gap-3 py-4 border-b lg:py-8">
		<a href="/" class="no-underline text-foreground">
			<h1 class="tracking-wide">Marqueeck</h1>
		</a>
		<nav class="flex gap-1.5 ms-auto">
			<Button variant="outline" class="no-underline" href="/docs" title="Documentation">
				<Book class="w-4 h-4" />
				<span class="hidden sm:block sm:ml-2">Documentation</span>
			</Button>
			<Button
				variant="outline"
				class="no-underline"
				href="https://github.com/AristideBH/elaimant-svelte"
				target="_blank"
				size="icon"
				title="GitHub page"
			>
				<Github class="w-4 h-4 " />
			</Button>
		</nav>
	</div>
</header>

<main class="py-24 overflow-hidden content-grid full-width gap-y-14">
	<slot />
</main>

<footer class="flex flex-wrap items-center py-4 border-t gap-x-3 gap-y-1">
	<span class="me-auto">
		Made with ♡ by <a href="https://github.com/AristideBH">@AristideBH</a>
	</span>
	<span class="flex gap-3">
		{#if $page.route.id === '/'}
			<a href="/docs">Docs</a>
		{:else}
			<a href="/">Home</a>
		{/if}
		<a href="https://github.com/AristideBH/Marqueeck" target="_blank">GitHub</a>
	</span>
</footer>
