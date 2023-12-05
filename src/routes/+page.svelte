<script lang="ts">
	import Marqueeck from '$lib/package';
	import { Button } from '$lib/components/ui/button';
	import { ArrowDownWideNarrow } from 'lucide-svelte';

	const description =
		'Marqueeck is a performant full-featured marquee component for Svelte, style-free, highly customizable and dependency-less.';
</script>

<svelte:head>
	<title>Marqueeck for Sveltekit</title>
	<meta name="description" content={description} />
</svelte:head>

<section class="flex flex-col items-start gap-4">
	<div>
		<p class="max-w-2xl lead text-balance">
			{description}
		</p>
		<ul>
			<li>♾️ Auto-repeat slotted element (reactive to screen's width)</li>
			<li>🎚️ Custom speed, direction, gap, padding, easing, animation, etc..</li>
			<li>🎨 Minimal styling (come with your own classes)</li>
			<li>✨ Custom interactions via event-forwarding (hover, click)</li>
			<li>⚓ Optional sticky elements</li>
			<li>✅ Fully typed with TypeScript</li>
		</ul>
	</div>

	<div class="flex flex-col items-start gap-6 gap-y-3">
		<Button variant="link" class="px-0 text-foreground hover:no-underline">
			<ArrowDownWideNarrow class="w-4 h-4 mr-2" />
			View the basic demos
		</Button>
		<Button href="/docs" class="no-underline" variant="outline">Read the documentation</Button>
	</div>
</section>

<section class="overflow-hidden gap-y-2 content-grid !col-span-full py-14">
	<Marqueeck class="py-4 bg-primary text-background full-width <" options={{ gap: 35 }}>
		<h1 class="text-5xl italic font-bold">Marqueeck</h1>
		<svelte:fragment slot="separator"><span class="text-2xl bold">✱</span></svelte:fragment>
		<svelte:fragment slot="stickyStart">Hello</svelte:fragment>
	</Marqueeck>
	<Marqueeck
		class="py-4 bg-primary text-background full-width <"
		options={{ gap: 50, direction: 'left', speed: 120 }}
	>
		<h1 class="text-5xl italic font-bold">Marqueeck</h1>
		<svelte:fragment slot="separator"><span class="text-2xl bold">✱</span></svelte:fragment>
		<svelte:fragment slot="stickyEnd">Bye !</svelte:fragment>
	</Marqueeck>
	<p class="text-center">Hover the marquees to slow them down</p>
</section>

<section class="flex flex-col items-start gap-2 isolate">
	<p class="lead text-balance">Want to install and customize Marqueeck ?</p>
	<Button href="/docs" class="no-underline" variant="outline">Read the documentation</Button>
</section>
