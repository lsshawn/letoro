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
			address: 'Lot 4211A, Taman Paik Siong, 7 1/2 Miles, Jalan Puchong, 47100 Puchong, Selangor',
			phone: '603 8080 0507',
			whatsapp: '60162770507',
			map: 'https://maps.app.goo.gl/7GxmXV3qH2sVPV188',
			hours: '10.00AM – 7.00PM'
		},
		{
			title: 'Bandar Puteri Puchong',
			address: 'No 72G, Jalan Puteri 5/5, Bandar Puteri Puchong, 47100 Puchong, Selangor',
			map: 'https://maps.app.goo.gl/GMXFkFp5foHEq7Zx9',
			phone: '603 8066 2311',
			whatsapp: '60182202311',
			hours: '9.00AM – 6.00PM'
		},
		{
			title: 'Happy Garden',
			map: 'https://maps.app.goo.gl/R3nvMeN3Z9FxGcdF6',
			address: 'No 39, Jalan Lazat 1, Taman Gembira, 58200 Kuala Lumpur',
			phone: '603 2385 6069',
			whatsapp: '60186686069',
			hours: '10.00AM – 7.00PM'
		},
		{
			title: 'Seri Kembangan',
			address: '21-1, Jalan Simfoni 1, Balakong, 43300 Seri Kembangan, Selangor',
			phone: '+6018-246 2110',
			whatsapp: '60182462110',
			map: 'https://maps.app.goo.gl/gsQs248kP4ffEhPX6',
			hours: '9.00AM – 6.00PM (Closed Tue)'
		}
	];

	let currentBreakpoint = '';
	let isMobile = false;
	let bookingModalOpen = false;

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
		class="hero min-h-[70vh] md:min-h-[90vh] place-items-start bg-bottom bg-[#161516] bg-cover md:bg-contain bg-no-repeat bg-right"
		style="background-image: url(hero-dog.jpg);"
	>
		<div class="hero-overlay bg-opacity-80" />
		<div
			class="hero-content items-start md:items-center text-left text-primary min-w-full pt-[5rem] md:pt-[30vh] md:pl-[10rem]"
		>
			<div class="w-full pb-4" style="text-shadow: 0 0 20px #000;" data-aos="fade-in">
				<h1 class="mb-5 text-6xl">Premium Pet Services</h1>
				<p class="mb-5 text-2xl max-w-md" style="text-shadow: 2px 2px 5px #121212">
					We provide professional grooming service for your pets in a calm environment.
				</p>
				<p class="text-2xl mt-8">Grooming | Boarding | Spa | Dental Scaling</p>
				<button
					class="btn btn-primary btn-wide mt-12 w-full sm:w-auto"
					on:click={() => (bookingModalOpen = true)}
				>
					Book via Whatsapp
				</button>
			</div>
		</div>
	</div>
</section>

<!-- Booking Modal -->
{#if bookingModalOpen}
	<div
		class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
		on:click|self={() => (bookingModalOpen = false)}
		role="dialog"
		aria-modal="true"
		aria-label="Select a branch to book"
	>
		<div
			class="w-full max-w-lg rounded-2xl overflow-hidden"
			style="background: rgba(26,26,26,0.95); backdrop-filter: blur(10px); border: 1px solid rgba(212,175,55,0.2); box-shadow: 0 0 40px rgba(0,0,0,0.5), 0 0 20px rgba(212,175,55,0.1);"
		>
			<!-- Header -->
			<div class="p-8 pb-4 text-center">
				<h2 class="text-3xl font-serif tracking-wide" style="color: #D4AF37;">Choose a Branch</h2>
				<div class="h-px w-12 mx-auto mt-4 rounded-full opacity-50" style="background: #D4AF37;" />
			</div>
			<!-- Branch list -->
			<div class="px-8 py-4 space-y-3">
				{#each locations as location}
					<button
						class="branch-card w-full text-left p-5 rounded-xl border border-gray-800 transition-all duration-200 group"
						on:click={() => {
							sendWhatsapp(location.whatsapp);
							bookingModalOpen = false;
						}}
					>
						<div class="flex justify-between items-center">
							<div>
								<h3 class="font-semibold text-lg tracking-wide uppercase" style="color: #D4AF37;">
									{location.title}
								</h3>
								{#if location.hours}
									<div class="flex items-center text-gray-400 text-sm mt-1 gap-1">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="14"
											height="14"
											viewBox="0 0 24 24"
											fill="none"
											stroke="currentColor"
											stroke-width="2"
											stroke-linecap="round"
											stroke-linejoin="round"
											><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg
										>
										<span>{location.hours}</span>
									</div>
								{/if}
							</div>
							<div class="flex items-center gap-3">
								<a
									href={location.map}
									target="_blank"
									rel="noreferrer"
									aria-label="View on Google Maps"
									on:click|stopPropagation
									class="text-gray-500 hover:text-[#D4AF37] transition-colors"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										stroke-width="2"
										stroke-linecap="round"
										stroke-linejoin="round"
										><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path
											d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"
										/></svg
									>
								</a>
								<svg
									class="opacity-0 group-hover:opacity-100 transition-opacity"
									style="color: #D4AF37;"
									xmlns="http://www.w3.org/2000/svg"
									width="20"
									height="20"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"><polyline points="9 18 15 12 9 6" /></svg
								>
							</div>
						</div>
					</button>
				{/each}
			</div>
			<!-- Cancel -->
			<div class="p-8 pt-4">
				<button
					class="w-full py-4 text-gray-500 hover:text-white transition-colors uppercase tracking-[0.2em] text-xs font-bold"
					on:click={() => (bookingModalOpen = false)}
				>
					Cancel
				</button>
			</div>
		</div>
	</div>
{/if}

<section id="dog">
	<div
		class="hero min-h-[50vh] md:min-h-[100vh] bg-left bg-no-repeat"
		style="background-image: url(section1-side.jpg);"
	>
		<div class="hero-overlay" />
		<div class="hero-content items-start text-left text-primary justify-end w-full">
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
				<p class="mb-5 text-4xl">Established in 2010.</p>
				<p class="mb-5 text-xl">
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
		<div class="hero-content items-start text-left text-primary justify-end w-full">
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
		<div class="hero-content items-start text-left text-primary justify-end w-full">
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
		<div class="hero-content items-start text-left text-primary pt-8 md:pt-[10vh] md:pl-[10rem]">
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
		<div class="hero-content items-center text-center text-primary w-full">
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
		<div class="hero-content items-center text-primary w-full">
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
							<a href={`tel:${location.phone}`} rel="noreferrer">
								{location.phone}
							</a>
							<span class="mx-2">|</span>
							<a href={location.map} rel="noreferrer">MAP</a>
						</div>
					{/each}
				</p>
				<div class="max-w-md">
					<h1 class="mb-5 text-4xl">Follow Us</h1>
					<div class="flex gap-5 mb-5">
						<a
							href="https://www.tiktok.com/@letorogrooming?_r=1&_t=ZS-946E2oM0whZ"
							target="_blank"
							rel="noreferrer"
							aria-label="TikTok"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="28"
								height="28"
								viewBox="0 0 24 24"
								fill="currentColor"
								><path
									d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"
								/></svg
							>
						</a>
						<a
							href="http://www.facebook.com/letorogrooming"
							target="_blank"
							rel="noreferrer"
							aria-label="Facebook"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="28"
								height="28"
								viewBox="0 0 24 24"
								fill="currentColor"
								><path
									d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
								/></svg
							>
						</a>
						<a
							href="http://www.instagram.com/letorogrooming"
							target="_blank"
							rel="noreferrer"
							aria-label="Instagram"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="28"
								height="28"
								viewBox="0 0 24 24"
								fill="currentColor"
								><path
									d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"
								/></svg
							>
						</a>
					</div>
				</div>
				<div class="divider" />
				<div>© {new Date().getFullYear()} Letoro Grooming</div>
			</div>
		</div>
	</div>
</section>

<style lang="postcss">
	.short-divider {
		@apply mb-4 max-w-[40px] border-t-2 border-solid border-primary;
	}

	.branch-card:hover {
		border-color: #d4af37;
		background: rgba(212, 175, 55, 0.05);
		transform: translateY(-1px);
	}
</style>
