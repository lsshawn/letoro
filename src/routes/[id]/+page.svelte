<script>
	import BackButton from '$lib/components/BackButton.svelte';

	const services = ['Full Grooming', 'De-tick', 'Medicated bath'];
</script>

<div
	style="background-image: linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255)), url(https://letorogrooming.com.my/wp-content/uploads/2020/07/dog-walker-29-1.jpg)"
	class="fullplayer-container"
>
	<div class="fullplayer-content flex flex-col justify-between">
		<BackButton />
		<img
			src="https://letorogrooming.com.my/wp-content/uploads/2020/07/dog-walker-29-1.jpg"
			class="fullplayer-body--image rounded-md"
		/>

		<div class="fullplayer-control pb-[]">
			<div class="p-6">
				<h2 class="card-title">Breed: Poodle</h2>
				<h2 class="card-title">Enjoyed our:</h2>
				<ul class="pl-4">
					{#each services as service}
						<li>{service}</li>
					{/each}
				</ul>
			</div>
			<button class="btn btn-primary btn-wide rounded-md">Book now</button>
		</div>
	</div>
</div>

<style>
	.fullplayer-container {
		background-attachment: scroll;
		-webkit-background-size: cover;
		-moz-background-size: cover;
		background-size: cover;
		height: 80vh;
		background-position: center top;
		background-size: cover;
		background-repeat: no-repeat;
	}

	.fullplayer-content {
		color: #fff;
		text-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
		z-index: 99;
		height: 100vh;
		background: linear-gradient(
			0deg,
			rgba(30, 31, 36, 1) 0%,
			rgba(30, 31, 36, 0.40578907344187676) 100%
		);
	}

	.fullplayer-body--image {
		max-height: 40vh;
		object-fit: contain;
	}
</style>
