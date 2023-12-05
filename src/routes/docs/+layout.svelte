<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { sections } from './[section]';
	import { page } from '$app/stores';
	$: currentSection = $page.params.section;

	const capitalizeFirstLetter = (string: string) =>
		string.charAt(0).toUpperCase() + string.slice(1);
</script>

<svelte:head>
	<title>Marqueeck - Docs - {capitalizeFirstLetter(currentSection)}</title>
</svelte:head>

<section>
	<h2>What does it do ?</h2>
	<p>
		Marqueeck is a performant full-featured marquee component for Svelte, style-free, highly
		customizable and dependency-less.
	</p>
	<ul>
		<li>♾️ Auto-repeat slotted element (reactive to screen's width)</li>
		<li>🎚️ Custom speed, direction, gap, padding, easing, animation, etc..</li>
		<li>🎨 Minimal styling (come with your own classes)</li>
		<li>✨ Custom interactions via event-forwarding (hover, click)</li>
		<li>⚓ Optional sticky elements</li>
		<li>✅ Fully typed with TypeScript</li>
	</ul>
</section>

<section class="flex gap-1 p-1 overflow-x-auto rounded-lg bg-secondary">
	{#each sections as section}
		{@const isCurrentSection = currentSection === section.value}
		{@const isAbout = section.value === 'about'}
		<Button
			href="/docs/{section.value}"
			variant={isCurrentSection ? 'default' : 'secondary'}
			class="no-underline {isAbout ? 'ml-auto' : ''}"
			size="sm"
		>
			{section.label}
		</Button>
	{/each}
</section>

<section class="overflow-x-hidden">
	<slot />
</section>
