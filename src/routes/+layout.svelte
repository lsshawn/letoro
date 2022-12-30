<script>
	import '../app.postcss';
	import Logo from '$lib/assets/icons/logo.svg?component';
</script>

<div>
	<div class="navbar sticky top-0 ">
		<div class="navbar-start" />
		<div class="flex flex-col">
			<a
				class="btn btn-ghost normal-case text-xl"
				href="/"
			>
				<Logo
					class="fill-white"
					width="200"
				/>
			</a>
			<div class="flex gap-4 justify-space-around mt-4">
				<h2 class="text-xl my-3 font-light">About Us</h2>
				<h2 class="text-xl my-3 font-light">Services</h2>
				<h2 class="text-xl my-3 font-light">Book Now</h2>
			</div>
		</div>
		<div class="navbar-end">
			<!--
				<button class="btn btn-ghost btn-circle">
					<User />
				</button>
            -->
		</div>
	</div>

	<slot />
</div>

<style>
	.navbar {
		background-color: white;
	}
</style>
