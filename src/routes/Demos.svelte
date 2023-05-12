<script>
	import Marqueeck from '$lib/index.ts';
</script>

<svelte:head>
	<style>
		@import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;400;500;600;700&display=swap');
		.font {
			font-family: 'Rajdhani', sans-serif !important;
		}
	</style>
</svelte:head>

<Marqueeck
	options={{ gap: 100, padding: { y: 20, x: 20 }, gradualHoverDuration: 1500 }}
	--bg-color={'black'}
	--text-color={'white'}
	hoverClasses="!bg-white !text-black "
	class="transition-colors duration-[500ms] cursor-default -rotate-1 mt-8"
>
	<div class="flex flex-nowrap gap-4 items-end font">
		<div class="flex flex-nowrap gap-2">
			<strong>En projet</strong>
			<span>2022/2023</span>
		</div>
		<h2 class="!text-7xl font translate-y-2">vêpres de la vièrge bienheureuse</h2>
		<div class="w-min leading-4">Antonio Tarantino</div>
	</div>
</Marqueeck>
