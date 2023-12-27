<script>
	import { cartOpen } from '$lib/stores/cartOpen';
	import { cartCount } from '$lib/stores/cartCount';
</script>

<header class="border p-4 flex gap-6 justify-between items-center">
	<div class="font-bold uppercase text-24 text-blue">Logitech</div>
	<button class="relative" on:click={() => ($cartOpen = true)}
		><iconify-icon class="text-30" icon="mdi:cart-outline" />
		{#if $cartCount}
			<div class="counter absolute -top-4 -right-2 bg-blue w-5 h-5 rounded-full">{$cartCount}</div>
		{/if}
	</button>
</header>
