<script>
	import { setContext } from 'svelte';
	import Footer from '../lib/components/Footer.svelte';
	import Header from '../lib/components/Header.svelte';
	import Cart from '$lib/components/Cart.svelte';
	import '../app.scss';
	import 'iconify-icon';

	setContext('site.title', 'Logitech');

	let rtl = false;
	let dir = '';

	function toggleRTL() {
		rtl = !rtl;
	}

	$: dir = rtl ? 'rtl' : 'ltr';
</script>

<div>
	<div class="mx-auto px-6 py-12">
		<div>
			<button on:click={toggleRTL}>Toggle RTL</button>

			<div class="grid gap-6" {dir}>
				<Header />
				<slot />
				<Footer />
			</div>

			<Cart />
		</div>
	</div>
</div>
