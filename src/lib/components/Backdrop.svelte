<script>
	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';

	onMount(() => {
		document.body.style.overflowY = 'hidden';

		return () => {
			document.body.style.overflowY = '';
		};
	});
</script>

<div
	transition:fade={{ duration: 200 }}
	class="bg-black fixed top-0 left-0 h-full w-full opacity-80"
/>
