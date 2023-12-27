<script>
	import { removeFromCart } from '$lib/stores/cartItems';
	import ProductImage from './ProductImage.svelte';

	export let hex = '';
	export let name = '';
	export let price = 0;
	export let sku = '';
	export let title = '';
</script>

<div class="cart-item flex gap-2 justify-between">
	<div class="product-image w-[7em]">
		<ProductImage {hex} />
	</div>

	<div class="product-info flex-grow">
		<h3 class="title font-bold">{title}</h3>
		<div class="name">{name}</div>
		<div class="sku">{sku}</div>
		<div class="price">{price}</div>
	</div>

	<div class="remove">
		<button
			on:click={() => {
				removeFromCart(sku);
			}}><iconify-icon class="text-24 hover:text-red" icon="fa6-regular:trash-can" /></button
		>
	</div>
</div>
