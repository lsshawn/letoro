<script lang="ts">
	import AOS from 'aos';
	import Gallery from 'svelte-image-gallery';
	import { onMount } from 'svelte';
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import '@splidejs/svelte-splide/css';
	import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';

	onMount(() => {
		AOS.init();
	});

	const galleries = [
		'gallery/dog1.jpg',
		'gallery/dog2.jpg',
		'gallery/dog3.jpg',
		'gallery/dog4.jpg',
		'gallery/dog5.jpg',
		'gallery/dog6.jpg',
		'gallery/small1.jpg',
		'gallery/small2.jpg',
		'gallery/small3.jpg',
		'gallery/cat1.jpg',
		'gallery/cat2.jpg',
		'gallery/cat3.jpg',
		'gallery/cat4.jpg'
	];
	const images = galleries.sort(() => Math.random() - 0.5);

	const locations = [
		{
			title: 'HQ (Jalan Puchong)',
			address: 'LOT 4211A, TAMAN PAIK SIONG, 7 1/2 MILES, JALAN PUCHONG, 47100 PUCHONG SELANGOR',
			phone: '603 8080 0507',
			whatsapp: '60162770507',
			map: 'https://www.google.com/maps/dir//LeToro+Grooming,+Lot+4211A,+Taman+Paik+Siong,+7+1%2F2+miles,+Jalan+Puchong,+47100+Puchong,+Selangor/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31cc4b11763505f1:0xa59760f03c65418f?sa=X&ved=2ahUKEwj-woL7_a_oAhW1IbcAHcuiBO0Q48ADMAB6BAgIECk',
			hours: '10.00AM – 7.00PM'
		},
		{
			title: 'Bandar Puteri Puchong',
			address: 'NO 72G, JALAN PUTERI 5/5, BANDAR PUTERI PUCHONG, 47100 PUCHONG SELANGOR',
			map: 'https://www.google.com/maps/dir//Letoro+Grooming+Bandar+Puteri+Puchong,+72G,+Jalan+Puteri+5%2F5,+Bandar+Puteri+Puchong,+47100+Puchong,+Selangor/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31cdb4a06ce4c4e3:0x17a3ab41774e7cd9?sa=X&ved=2ahUKEwj-woL7_a_oAhW1IbcAHcuiBO0Q48ADMAF6BAgIEDQ',
			phone: '603 8066 2311',
			whatsapp: '60182202311',
			hours: '9.00AM – 6.00PM'
		},
		{
			title: 'Happy Garden',
			map: 'https://www.google.com/maps/dir//Letoro+Grooming+Bandar+Puteri+Puchong,+72G,+Jalan+Puteri+5%2F5,+Bandar+Puteri+Puchong,+47100+Puchong,+Selangor/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x31cdb4a06ce4c4e3:0x17a3ab41774e7cd9?sa=X&ved=2ahUKEwj-woL7_a_oAhW1IbcAHcuiBO0Q48ADMAF6BAgIEDQ',
			address: 'NO 39, JALAN LAZAT 1, TAMAN GEMBIRA, 58200 PUCHONG SELANGOR',
			phone: '603 2385 6069',
			whatsapp: '60186686069',
			hours: '10.00AM – 7.00PM'
		}
	];

	let currentBreakpoint = '';
	let isMobile = false;

	onMount(() => {
		const handleResize = () => {
			if (window.innerWidth < 640) {
				currentBreakpoint = 'sm';
			} else if (window.innerWidth < 768) {
				currentBreakpoint = 'md';
			} else if (window.innerWidth < 1024) {
				currentBreakpoint = 'lg';
			} else {
				currentBreakpoint = 'xl';
			}
		};

		const userAgent = navigator.userAgent;
		isMobile = /Mobi|Android/i.test(userAgent);

		handleResize(); // set initial breakpoint
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	function sendWhatsapp(phone: string, text = `I'd like to book`) {
		const baseUrl = isMobile ? 'whatsapp://send?' : 'https://api.whatsapp.com/send?';
		const url = `${baseUrl}phone=${phone}&text=${text}`;
		window.open(url, '_blank');
	}
</script>

<svelte:head>
	<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
</svelte:head>

<section id="hero">
	<div
		class="hero min-h-[60vh] md:min-h-[90vh] place-items-start bg-bottom bg-[#161516] bg-cover md:bg-contain bg-no-repeat bg-right"
		style="background-image: url(hero-dog.jpg);"
	>
		<div class="hero-overlay bg-opacity-80" />
		<div
			class="hero-content items-start md:items-center text-left text-neutral-content min-w-full pt-[5rem] md:pt-[30vh] md:pl-[10rem]"
		>
			<div class="w-full pb-4" style="text-shadow: 0 0 20px #000;" data-aos="fade-in">
				<h1 class="mb-5 text-6xl ">Premium Pet Services</h1>
				<p class="mb-5 text-2xl max-w-md" style="text-shadow: 2px 2px 5px #121212">
					We provide professional grooming service for your pets in a calm environment.
				</p>
				<p class="text-2xl mt-8">Grooming | Boarding | Spa | Dental Scaling</p>
				<div class="dropdown mt-12 w-full sm:w-auto">
					<label tabindex="0" class="btn btn-primary btn-wide w-full sm:w-auto"
						>Book via Whatsapp</label
					>
					<ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
						{#each locations as location}
							<li
								on:click={() => sendWhatsapp(location.whatsapp)}
								class="py-4 px-2 hover:bg-gray-700"
							>
								{location.title}
							</li>
						{/each}
					</ul>
				</div>
			</div>
		</div>
	</div>
</section>

<section id="dog">
	<div
		class="hero min-h-[40vh] md:min-h-[100vh] bg-left bg-no-repeat"
		style="background-image: url(section1-side.jpg);"
	>
		<div class="hero-overlay" />
		<div class="hero-content items-start text-left text-neutral-content  justify-end w-full">
			<div class="pl-4">
				<div class="max-w-md" data-aos="fade-left">
					<h1 class="mb-5 text-4xl" style="text-shadow: 2px 2px 5px #121212">Dog Grooming</h1>
					<hr class="short-divider" />
					<p class="mb-5 text-xl max-w-sm md:max-w-md" style="text-shadow: 2px 2px 5px #121212">
						Experienced groomers in providing relaxing grooming experienced for canines of all
						breeds and ages
					</p>
					<!-- <HorizontalCards images={dogImages} /> -->
				</div>
			</div>
		</div>
	</div>
</section>

<section id="about">
	<div
		class="hero min-h-[30vh] md:min-h-[60vh] bg-[#0e0e0e]"
		style="background-image: url(paw-patterns.png);
	background-blend-mode: soft-light;
	background-repeat: no-repeat;
	background-size: contain;
	background-position: right;
  "
	>
		<div class="hero-content flex flex-col md:flex-row md:gap-10" data-aos="fade-in">
			<img src="shop.jpg" alt="letoro shop" class="md:max-w-md shadow-2xl rounded-lg" />

			<div class="max-w-xl text-center md:text-left">
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
		class="hero min-h-[40vh] md:min-h-[100vh] bg-no-repeat bg-contain bg-left bg-[#100b0b]"
		style="background-image: url(cat-black-left.jpg);"
	>
		<div class="hero-overlay" />
		<div class="hero-content items-start text-left text-neutral-content  justify-end w-full">
			<div class="pl-4">
				<div class="max-w-md" data-aos="fade-left">
					<h1 class="mb-5 text-4xl" style="text-shadow: 2px 2px 5px #121212">Cat Grooming</h1>
					<hr class="short-divider" />
					<p class="mb-5 text-xl max-w-sm md:max-w-md" style="text-shadow: 2px 2px 5px #121212">
						Professional grooming services for felines in low-stress environment.
					</p>
					<!-- <HorizontalCards images={dogImages} /> -->
				</div>
			</div>
		</div>
	</div>
</section>

<section id="small-animal">
	<div
		class="hero min-h-[40vh] bg-[-80px -20px] md:min-h-[100vh]"
		style="background-image: linear-gradient(to top, rgb(0 0 0) 0%, rgb(0 0 0 / 16%) 50%, rgba(0, 0, 0, 0) 100%), url(guinea-pig-black.jpg)"
	>
		<div class="hero-overlay" />
		<div class="hero-content items-start text-left text-neutral-content  justify-end w-full">
			<div class="pl-4">
				<div class="max-w-md" data-aos="fade-left">
					<h1 class="mb-5 text-4xl" style="text-shadow: 2px 2px 5px #121212">Small Animal</h1>
					<hr class="short-divider" />
					<p class="mb-5 text-xl max-w-sm md:max-w-md">
						Gentle handling and grooming services for small animals.
					</p>
					<!-- <HorizontalCards images={dogImages} /> -->
				</div>
			</div>
		</div>
	</div>
</section>

<section id="boarding">
	<div
		class="hero min-h-[40vh] md:min-h-[80vh] place-items-start bg-[100px] bg-no-repeat md:bg-contain md:bg-right bg-[#161313] bg-cover lg:bg-contain"
		style="background-image: url(dog-sleep.jpg);"
	>
		<div
			class="hero-content items-start text-left text-neutral-content pt-8 md:pt-[10vh] md:pl-[10rem]"
		>
			<div class="max-w-md" data-aos="fade-right" data-aos-duration="700">
				<h1 class="mb-5 text-4xl" style="text-shadow: 2px 2px 5px #121212">Cageless Pet Hotel</h1>
				<p class="mb-5 text-xl max-w-sm" style="text-shadow: 2px 2px 5px #121212">
					Our dog daycare and boarding is cage-free. Cat and small animal boarding is available by
					booking.
				</p>
				<img
					src="boarding.jpg"
					alt="cageless boarding"
					class="w-full rounded-lg max-w-md shadow-2xl"
				/>
			</div>
		</div>
	</div>
</section>

<section id="shop">
	<div
		class="hero min-h-[50vh] md:min-h-[80vh] bg-cover bg-no-repeat bg-[#161616] bg-bottom"
		style="background-image: url(shopee-products.png);"
	>
		<!-- <div class="hero-overlay bg-opacity-50" /> -->
		<div class="hero-content items-center text-center text-neutral-content w-full">
			<div class="max-w-md card" data-aos="fade-in">
				<div class="card-body bg-neutral/90 rounded-md" data-aos="zoom-in">
					<h1 class="mb-5 text-4xl">Visit our Shopee store</h1>
					<p class="mb-5 text-xl max-w-sm" style="text-shadow: 2px 2px 5px #121212">
						For premium pet food and accessories
					</p>
					<a
						href="https://shopee.com.my/letorogrooming.appt"
						rel="noreferrer"
						target="_blank"
						class="btn btn-primary">Visit Shopee</a
					>
				</div>
			</div>
		</div>
	</div>
</section>

<section class=" bg-[#161616] py-8 pl-4">
	<h1 class="mb-5 font-bold text-4xl text-center" style="text-shadow: 2px 2px 5px #121212">
		Our Latest Customers
	</h1>
	<Splide
		class="my-8"
		options={{
			rewind: true,
			fixedHeight: currentBreakpoint === 'sm' ? '200px' : '55vh',
			autoHeight: true,
			perPage: 3,
			type: 'loop'
		}}
		aria-label="Svelte Splide Example"
		extensions={{ AutoScroll }}
	>
		{#each images as image}
			<SplideSlide>
				<img src={image} alt="Gallery" />
			</SplideSlide>
		{/each}
	</Splide>
</section>

<section id="map">
	<div
		class="hero min-h-[80vh] bg-contain bg-right bg-[#0e0e0e] bg-no-repeat bg-blend-multiply md:bg-blend-color-burn pt-12"
		style="background-image: url(paw-patterns.png);"
	>
		<!-- <div class="hero-overlay bg-opacity-50" /> -->
		<div class="hero-content items-center text-neutral-content w-full">
			<div class="max-w-md">
				<h1 class="mb-5 text-4xl">Visit Us</h1>
				<hr class="short-divider" />
				<p
					class="mb-5 text-xl max-w-sm text-white"
					style="text-shadow: 2px 2px 5px #121212"
					data-aos="fade-in"
				>
					{#each locations as location}
						<div class="prose mb-12">
							<strong>{location.title}</strong>
							<div class="mb-4">
								{location.address}
							</div>
							<button
								class="btn-sm btn btn-primary rounded-md"
								on:click={() => sendWhatsapp(location.whatsapp)}
							>
								Book Now</button
							>
							<span class="mx-2">|</span>
							<a href={`${location.tel}`} rel="noreferrer">
								{location.phone}
							</a>
							<span class="mx-2">|</span>
							<a href={location.map} rel="noreferrer">MAP</a>
						</div>
					{/each}
				</p>
				<div class="max-w-md">
					<h1 class="mb-5 text-4xl">Follow Us</h1>
					<p class="mb-5 text-xl max-w-sm" style="text-shadow: 2px 2px 5px #121212">
						<a href="http://www.facebook.com/letorogrooming" target="_blank" rel="noreferrer">
							<div>Facebook</div>
						</a>
						<a href="http://www.instagram.com/letorogrooming" target="_blank" rel="noreferrer">
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

<style lang="postcss">
	.short-divider {
		@apply mb-4 max-w-[40px] border-t-2 border-solid border-primary;
	}
</style>
