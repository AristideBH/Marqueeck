<script lang="ts">
	// import Marqueeck, { type MarqueeckOptions } from '@arisbh/marqueeck';
	import Marqueeck, { type MarqueeckOptions } from '$lib/index.ts';
	import { scrollState, scrollHandler } from '$lib/MarqueeckScroll.ts';

	const velocitySpeed = (nb) => {
		if (nb == 0) {
			return 10;
		} else {
			return nb;
		}
	};

	const options: MarqueeckOptions = {
		direction: 'right',
		gap: 60,
		gradualHoverDuration: 1000,
		onHover: 'stop',
		speed: velocitySpeed($scrollState.velocity),
		debug: true
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

<pre class="container">{JSON.stringify($scrollState, undefined, 2)}</pre>

<div class="container space-y-4 max-h-[380px] overflow-auto" on:scroll={scrollHandler}>
	<div class="card p-4">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
	</div>
	<div class="card p-4">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
	</div>

	<div class="card p-4">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
	</div>
	<div class="card p-4">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
	</div>
	<div class="card p-4">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
	</div>
	<div class="card p-4">
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga explicabo et harum placeat
			inventore quaerat error adipisci cum itaque quia totam ullam minima, delectus odio! Et ullam
			voluptatum ipsam dolor.
		</p>
	</div>
</div>
