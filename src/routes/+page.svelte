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

	const locations = [
		{
			title: 'HQ',
			address: 'LOT 4211A, TAMAN PAIK SIONG, 7 1/2 MILES, JALAN PUCHONG, 47100 PUCHONG SELANGOR',
			phone: '603 8080 0507',
			map: 'https://www.google.com/maps/dir//LeToro+Grooming,+Lot+4211A,+Taman+Paik+Siong,+7+1%2F2+miles,+Jalan+Puchong,+47100+Puchong,+Selangor/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31cc4b11763505f1:0xa59760f03c65418f?sa=X&ved=2ahUKEwj-woL7_a_oAhW1IbcAHcuiBO0Q48ADMAB6BAgIECk',
			hours: '10.00AM – 7.00PM'
		},
		{
			title: 'BP Outlet',
			address: 'NO 72G, JALAN PUTERI 5/5, BANDAR PUTERI PUCHONG, 47100 PUCHONG SELANGOR',
			map: 'https://www.google.com/maps/dir//Letoro+Grooming+Bandar+Puteri+Puchong,+72G,+Jalan+Puteri+5%2F5,+Bandar+Puteri+Puchong,+47100+Puchong,+Selangor/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31cdb4a06ce4c4e3:0x17a3ab41774e7cd9?sa=X&ved=2ahUKEwj-woL7_a_oAhW1IbcAHcuiBO0Q48ADMAF6BAgIEDQ',
			phone: '603 8066 2311',
			hours: '9.00AM – 6.00PM'
		},
		{
			title: 'HG Outlet',
			map: 'https://www.google.com/maps/dir//Letoro+Grooming+Bandar+Puteri+Puchong,+72G,+Jalan+Puteri+5%2F5,+Bandar+Puteri+Puchong,+47100+Puchong,+Selangor/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31cdb4a06ce4c4e3:0x17a3ab41774e7cd9?sa=X&ved=2ahUKEwj-woL7_a_oAhW1IbcAHcuiBO0Q48ADMAF6BAgIEDQ',
			address: 'NO 39, JALAN LAZAT 1, TAMAN GEMBIRA, 58200 PUCHONG SELANGOR',
			phone: '603 2385 6069',
			hours: '10.00AM – 7.00PM'
		}
	];
</script>

<section id="hero">
	<div
		class="hero min-h-[50vh] lg:min-h-screen place-items-start bg-bottom"
		style="background-image: url(hero-dog.jpg);"
	>
		<div class="hero-overlay bg-opacity-80" />
		<div class="hero-content items-start text-left text-neutral-content pr-0 min-w-full pt-[10rem]">
			<div class="w-full pb-4" style="text-shadow: 0 0 20px #000;">
				<h1 class="mb-5 text-7xl ">Premium Pet Services</h1>
				<p class="mb-12 text-2xl max-w-md" style="text-shadow: 2px 2px 5px #121212">
					We provide professional grooming service for your pets in a calm environment.
				</p>
				<a href="https://api.whatsapp.com/send?phone=60162770507&text=" target="_blank">
					<button class="btn btn-outline btn-base">Book via Whatsapp</button>
					<div class="font-thin mt-2">+6016 277 0507</div>
				</a>
			</div>
		</div>
	</div>
</section>

<section id="dog">
	<div
		class="hero min-h-[50vh]  bg-[left_-20px] bg-no-repeat"
		style="background-image: url(section1-side.jpg);"
	>
		<div class="hero-overlay" />
		<div class="hero-content items-start text-left text-neutral-content p-0 justify-end w-full">
			<div class="pl-4 pr-0">
				<div class="max-w-md">
					<h1 class="mb-5 text-4xl" style="text-shadow: 2px 2px 5px #121212">Dog Grooming</h1>
					<p class="mb-5 text-xl max-w-sm" style="text-shadow: 2px 2px 5px #121212">
						Experienced groomers in providing relaxing grooming experienced for canines of all
						breeds and ages
					</p>
					<HorizontalCards images={dogImages} />
				</div>
			</div>
		</div>
	</div>
</section>

<section id="about">
	<div class="hero min-h-[30vh] bg-[#161616]">
		<div class="hero-content">
			<div class="max-w-xl">
				<p class="mb-5 text-4xl ">Established in 2010.</p>
				<p class="mb-5 text-xl ">
					Expert groomer with over a decade of experience. We only use high quality products. We
					work on an appointment only basis. This keeps the salon as stress free as possible.
				</p>
			</div>
		</div>
	</div>
</section>

<section id="cat">
	<div
		class="hero min-h-[50vh] bg-right bg-no-repeat bg-auto"
		style="background-image: url(cat-black-left.jpg);"
	>
		<div class="hero-overlay" />
		<div class="hero-content items-start text-left text-neutral-content p-0 justify-end w-full">
			<div class="pl-4 pr-0">
				<div class="max-w-md">
					<h1 class="mb-5 text-4xl" style="text-shadow: 2px 2px 5px #121212">Cat Grooming</h1>
					<p class="mb-5 text-xl max-w-sm" style="text-shadow: 2px 2px 5px #121212">
						Professional grooming services for felines in low-stress environment.
					</p>
					<HorizontalCards images={dogImages} />
				</div>
			</div>
		</div>
	</div>
</section>

<section id="small-animal">
	<div
		class="hero min-h-[50vh] bg-[left_-20px]"
		style="background-image: url(guinea-pig-black.jpg);"
	>
		<div class="hero-overlay" />
		<div class="hero-content items-start text-left text-neutral-content p-0 justify-end w-full">
			<div class="pl-4 pr-0">
				<div class="max-w-md">
					<h1 class="mb-5 text-4xl" style="text-shadow: 2px 2px 5px #121212">Small Animal</h1>
					<p class="mb-5 text-xl">Gentle handling and grooming services for small animals.</p>
					<HorizontalCards images={dogImages} />
				</div>
			</div>
		</div>
	</div>
</section>

<section id="boarding">
	<div
		class="hero min-h-[50vh] place-items-start bg-left"
		style="background-image: url(dog-sleep.jpg);"
	>
		<div class="hero-content items-start text-left text-neutral-content">
			<div class="max-w-md">
				<h1 class="mb-5 text-4xl" style="text-shadow: 2px 2px 5px #121212">Cageless Pet Hotel</h1>
				<p class="mb-5 text-xl max-w-sm" style="text-shadow: 2px 2px 5px #121212">
					Our dog daycare and boarding is cage-free. Cat and small animal boarding is available by
					booking.
				</p>
			</div>
		</div>
	</div>
</section>

<section id="shop">
	<div
		class="hero min-h-[50vh] place-items-start bg-contain bg-no-repeat bg-[#161616] bg-bottom"
		style="background-image: url(dog-high-contrast-no-pattern.jpg);"
	>
		<!-- <div class="hero-overlay bg-opacity-50" /> -->
		<div class="hero-content items-center text-center text-neutral-content w-full">
			<div class="max-w-md">
				<h1 class="mb-5 text-4xl">Visit our Shopee store</h1>
				<p class="mb-5 text-xl max-w-sm" style="text-shadow: 2px 2px 5px #121212">
					For premium pet food and accessories
				</p>
				<button class="btn btn-base btn-outline">Shop now</button>
			</div>
		</div>
	</div>
</section>

<section id="map">
	<div class="hero min-h-[50vh] place-items-start bg-contain bg-no-repeat bg-[#161616] bg-bottom">
		<!-- <div class="hero-overlay bg-opacity-50" /> -->
		<div class="hero-content items-center text-neutral-content w-full">
			<div class="max-w-md">
				<h1 class="mb-5 text-4xl">Visit Us</h1>
				<p class="mb-5 text-xl max-w-sm text-white" style="text-shadow: 2px 2px 5px #121212">
					{#each locations as location}
						<div class="prose mb-8">
							<div>{location.title}</div>
							<div>
								{location.address}
							</div>
							<a href="tel:">
								{location.phone}
							</a>
							<span class="mx-2">|</span>
							<a href={location.map}>MAP</a>
						</div>
					{/each}
				</p>
				<div class="max-w-md">
					<h1 class="mb-5 text-4xl">Follow Us</h1>
					<p class="mb-5 text-xl max-w-sm" style="text-shadow: 2px 2px 5px #121212">
						<a href="http://www.facebook.com/letorogrooming" target="_blank">
							<div>Facebook</div>
						</a>
						<a href="http://www.instagram.com/letorogrooming" target="_blank">
							<div>Instagram</div>
						</a>
					</p>
				</div>
				<div class="divider" />
				<div>© 2023 Letoro Grooming</div>
			</div>
		</div>
	</div>
</section>
