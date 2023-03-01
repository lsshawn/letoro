<script>
	import '../app.postcss';
	import Logo from '$lib/assets/icons/logo.svg?component';
	import MetaTag from '$lib/components/MetaTag.svelte';
</script>

<MetaTag />
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
