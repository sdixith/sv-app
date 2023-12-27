<script>
	import { cartOpen } from '$lib/stores/cartOpen';
	import { cartItems } from '$lib/stores/cartItems';
	import CartItem from './CartItem.svelte';
</script>

{#if $cartOpen}
	<div class="cart fixed top-0 right-0 w-96 bg-white h-full border-l">
		<div class="top-bar bg-black text-white flex gap-6 justify-between p-3">
			Cart
			<button on:click={() => ($cartOpen = false)}>Close</button>
		</div>

		<div class="container p-3 grid gap-3">
			{#each Object.values($cartItems) as item}
				<CartItem {...item} />
			{/each}
		</div>
	</div>
{/if}
