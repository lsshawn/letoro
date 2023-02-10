<script lang="ts">
	export let images = [];
</script>

<div class="flex flex-col m-auto p-auto">
	<div class="flex overflow-x-scroll pb-10 hide-scroll-bar">
		<div class="flex flex-nowrap ml-6 space-x-3">
			{#each images as image}
				{#if image}
					<div class="inline-block hover:shadow-xl transition-shadow duration-300 ease-in-out">
						<div class="card bg-white w-40 rounded-md">
							<figure>
								<img src={image} alt="Episode image" />
							</figure>
						</div>
					</div>
				{/if}
			{/each}
		</div>
	</div>
</div>

<style>
	.hide-scroll-bar {
		-ms-overflow-style: none;
		scrollbar-width: none;
	}
	.hide-scroll-bar::-webkit-scrollbar {
		display: none;
	}
</style>
