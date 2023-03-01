<script>
	import '../app.postcss';
	import Logo from '$lib/assets/icons/logo.svg?component';
</script>

<!-- <div class="navbar"> -->
<!-- 	<div class="navbar-start" /> -->
<!-- 	<div class="flex flex-col"> -->
<!-- 		<a class="btn btn-ghost normal-case text-xl" href="/"> -->
<!-- 			<Logo class="fill-gray-800" width="200" /> -->
<!-- 		</a> -->
<!-- 		<div class="flex gap-4 justify-space-around mt-4"> -->
<!-- 			<h2 class="text-xl my-3 font-light">About Us</h2> -->
<!-- 			<h2 class="text-xl my-3 font-light">Services</h2> -->
<!-- 			<h2 class="text-xl my-3 font-light">Book Now</h2> -->
<!-- 		</div> -->
<!-- 	</div> -->
<!-- 	<div class="navbar-end" /> -->
<!-- </div> -->
<div class="navbar" style="background-color:#161516">
	<div class="navbar-start" />
	<Logo class="w-[200px] md:w-[500px] fill-white" />

	<div class="navbar-end" />
</div>
<slot />

<style>
	.navbar {
		background-color: white;
	}
</style>
