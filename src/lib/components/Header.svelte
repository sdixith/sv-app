<script>
	import { cartOpen } from '$lib/stores/cartOpen';
	import { cartCount } from '$lib/stores/cartCount';
	import { getContext } from 'svelte';

	const title = getContext('site.title');
</script>

<header class="border p-4 flex gap-6 justify-between items-center">
	<div class="font-bold uppercase text-24 text-blue">{title}</div>
	<div class="navigation flex gap-6">
		<a href="/my-account" class="">My Account</a>
		<a href="/products" class="">Products</a>
		<a href="/fetch/1" class="">Posts</a>
	</div>
	<button class="relative" on:click={() => ($cartOpen = true)}
		><iconify-icon class="text-30" icon="mdi:cart-outline" />
		{#if $cartCount}
			<div class="counter absolute -top-4 -right-2 bg-blue w-5 h-5 rounded-full">{$cartCount}</div>
		{/if}
	</button>
</header>
