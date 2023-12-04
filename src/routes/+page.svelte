<script lang="ts">
	import Marqueeck from '$lib/package';
	import { Button } from '$lib/components/ui/button';
	import { ArrowDownWideNarrow } from 'lucide-svelte';

	const description =
		'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque iste voluptatum, accusantium excepturi nam recusandae, quisquam alias doloremque nulla libero sunt ut. Perspiciatis, maxime qui consequuntur inventore dolor facere tempore?';
</script>

<svelte:head>
	<title>Marqueeck for Sveltekit</title>
	<meta name="description" content={description} />
</svelte:head>

<section class="flex flex-col items-start gap-4">
	<p class="max-w-2xl lead text-balance">
		{description}
	</p>

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
