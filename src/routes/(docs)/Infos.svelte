<script lang="ts">
	import { Avatar } from '@skeletonlabs/skeleton';
</script>

<div class="container flex flex-col lg:flex-row gap-12 pt-4">
	<div class="space-y-2 max-w-lg">
		<h2 class="">About me</h2>
		<div class="card p-4 flex gap-6">
			<a
				class="flex flex-col items-center gap-2"
				href="https://github.com/AristideBH/"
				target="_blank"
			>
				<Avatar
					src="https://avatars.githubusercontent.com/u/11951633?v=4"
					width="w-32"
					rounded="rounded-full"
				/>
				<span>@AristideBH</span>
			</a>

			<div class="flex flex-col">
				<p>I am Aristide, a graphic designer and web developper from Paris, France.</p>
				<p>
					I'm currently work at <a href="https://noise.fr" target="_blank">Noise</a> agency on print
					and web projects.
				</p>
				<p class="mt-auto">
					To contact me, feel free to
					<a href="mailto:aristide.bruneau@gmail.com"> drop a mail </a> !
				</p>
			</div>
		</div>
	</div>
	<div class="space-y-2 flex flex-col">
		<h2 class="">Credits</h2>
		<span>
			<a href="https://www.skeleton.dev/" target="_blank">Skeleton.dev</a>
			from their framework use to build this site.
		</span>
		<span class="">
			<a href="https://www.skeleton.dev/" target="_blank">Svelte</a>
			from their awesome proto-framework powering the module.
		</span>
	</div>
</div>
