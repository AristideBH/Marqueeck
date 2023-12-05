<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import { sections } from './[section]';
	import { page } from '$app/stores';
	$: currentSection = $page.params.section;
</script>

<section>
	<h2>What does it do ?</h2>
	<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat fugit earum est quasi quisquam
		voluptatum sint exercitationem ex qui ad alias a cumque molestias ab eveniet velit sed, officia
		neque.
	</p>
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
