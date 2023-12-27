<script>
	import { fly } from 'svelte/transition';
	import { cartOpen } from '$lib/stores/cartOpen';
	import { cartItems } from '$lib/stores/cartItems';
	import CartItem from './CartItem.svelte';
	import Backdrop from './Backdrop.svelte';
	import { focusTrap } from '$lib/actions/focusTrap';

	function close() {
		$cartOpen = false;
	}
</script>

{#if $cartOpen}
	<Backdrop />
	<div
		use:focusTrap={{ onDeactivate: close }}
		transition:fly={{ x: '100%' }}
		class="cart fixed top-0 right-0 w-96 bg-white h-full border-l"
	>
		<div class="top-bar bg-black text-white flex gap-6 justify-between p-3">
			Cart
			<button on:click={close}>
				<iconify-icon class="hover:text-red text-30" icon="zondicons:close-solid" />
			</button>
		</div>

		<div class="container p-3 grid gap-3">
			{#each Object.values($cartItems) as item}
				<CartItem {...item} />
			{/each}
		</div>
	</div>
{/if}
