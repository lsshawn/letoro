<script>
	const team = [
		{
			name: 'Jason Tor',
			title: 'Founder',
			subtitle: 'Managing Director',
			photo:
				'https://res.cloudinary.com/imsiwon9/image/upload/v1672332896/jason_f2bykr.jpg',
		},
		{
			name: 'Jason Tor',
			title: 'Founder',
			subtitle: 'Managing Director',
			photo:
				'https://res.cloudinary.com/imsiwon9/image/upload/v1672332896/jason_f2bykr.jpg',
		},
		{
			name: 'Jason Tor',
			title: 'Founder',
			subtitle: 'Managing Director',
			photo:
				'https://res.cloudinary.com/imsiwon9/image/upload/v1672332896/jason_f2bykr.jpg',
		},
		{
			name: 'Jason Tor',
			title: 'Founder',
			subtitle: 'Managing Director',
			photo:
				'https://res.cloudinary.com/imsiwon9/image/upload/v1672332896/jason_f2bykr.jpg',
		},
		{
			name: 'Jason Tor',
			title: 'Founder',
			subtitle: 'Managing Director',
			photo:
				'https://res.cloudinary.com/imsiwon9/image/upload/v1672332896/jason_f2bykr.jpg',
		},
	];
</script>

<h1>Out Team</h1>
<section class="overflow-hidden text-gray-700 ">
	<div class="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
		<div class="flex flex-wrap -m-1 md:-m-2">
			{#each team as person}
				<div class="flex flewrap w-1/2">
					<div class="w-full p-1 md:p-2">
						<img
							alt="gallery"
							class="block object-cover object-center w-full h-full rounded-lg"
							src={person.photo}
						/>
						<h3>{person.name}</h3>
						<h3>{person.title}</h3>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>
