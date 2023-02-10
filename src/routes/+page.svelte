<script lang="ts">
	import HorizontalCards from '$lib/components/HorizontalCards.svelte';
	const dogImages = [
		'dogs/dog.jpg',
		'dogs/dog.jpg',
		'dogs/dog.jpg',
		'dogs/dog.jpg',
		'dogs/dog.jpg',
		'dogs/dog.jpg',
		'dogs/dog.jpg'
	];
</script>

<section id="guinea-pig">
	<div class="hero min-h-screen place-items-start" style="background-image: url(hero-dog.jpg);">
		<div class="hero-content items-start text-left text-neutral-content pr-0 min-w-full">
			<div class="w-full bg-[#1a1a1a59]" style="text-shadow: 0 0 20px #000;">
				<h1 class="mb-5 text-8xl ">Premium Pet Services</h1>
				<p class="mb-5 text-wwxl">
					We provide professional grooming service for your pets in a calm environment.
				</p>
				<button class="btn btn-primary">Book Now</button>
			</div>
		</div>
	</div>
</section>

<section id="dog">
	<div class="hero min-h-screen bg-[left_-20px]" style="background-image: url(section1-side.jpg);">
		<div class="hero-content items-start text-left text-neutral-content">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">Dog Grooming</h1>
				<p class="mb-5">
					Experienced groomers in providing relaxing grooming experienced for canines of all breeds
					and ages
				</p>
				<HorizontalCards images={dogImages} />
			</div>
		</div>
	</div>
</section>

<section id="cat">
	<div class="hero min-h-screen bg-[left_-20px]" style="background-image: url(cat-hero.jpg);">
		<div class="hero-content text-center text-neutral-content">
			<div class="max-w-md">
				<h1 class="mb-5 text-5xl font-bold">Premium Pet Services</h1>
				<p class="mb-5">
					We provide professional grooming service for your pets in a calm environment.
				</p>
				<button class="btn btn-primary">Book Now</button>
			</div>
		</div>
	</div>
</section>
