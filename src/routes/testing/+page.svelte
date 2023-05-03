<script lang="ts">
	import Marqueeck, { type MarqueeckOptions } from '@arisbh/marqueeck';

	const options: MarqueeckOptions = {
		direction: 'right',
		gap: 60,
		gradualHoverDuration: 1000,
		onHover: 'stop'
	};
</script>

<Marqueeck
	{options}
	--bg-color={'rgb(164, 217, 205)'}
	--text-color={'rgb(var(--color-primary-700))'}
	hoverClasses="!bg-primary-500 !text-white"
	class="transition-all cursor-pointer duration-1000 ease-in-out  "
>
	<div class="flex gap-2 items-end text-5xl">
		<span> 👋 </span>
		<strong class="">Marqueeck</strong>
	</div>
</Marqueeck>
