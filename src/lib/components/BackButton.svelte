<script>
	import { ChevronLeft } from 'svelte-heros-v2';

	function back() {
		history.back();
	}
</script>

<button
	class="btn btn-circle btn-link text-gray-900 visible"
	on:click={back}
>
	<ChevronLeft />
</button>
