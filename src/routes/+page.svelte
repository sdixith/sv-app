<script>
	import Cart from '$lib/components/Cart.svelte';
	import Footer from '../lib/components/Footer.svelte';
	import Header from '../lib/components/Header.svelte';
	import PlpPageLayout from '../lib/components/PlpPageLayout.svelte';

	let rtl = false;
	let dir = '';

	let cartOpen = false;

	function toggleRTL() {
		rtl = !rtl;
	}

	$: dir = rtl ? 'rtl' : 'ltr';
</script>

<button on:click={toggleRTL}>Toggle RTL</button>

<div class="grid gap-6" {dir}>
	<Header />
	<PlpPageLayout />
	<Footer />
</div>

<Cart />
