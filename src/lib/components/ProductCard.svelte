<script>
	import ColorSwatch from './ColorSwatch.svelte';
	import ProductImage from './ProductImage.svelte';
	import { addToCart } from '$lib/stores/cartItems';
	export let title = '';
	/**
	 * @type {any[]}
	 */
	export let variants = [];
	let selectedIndex = 0;
	/**
	 * @type {{ hex: any; price: any; }}
	 */
	let selectedVariant;

	/**
	 * @param {number} index
	 */
	function swatchClicked(index) {
		selectedIndex = index;
	}

	function addToCartClicked() {
		addToCart(title, selectedVariant);
	}

	$: selectedVariant = variants[selectedIndex];
</script>

<div class="border p-3 grid gap-2">
	<ProductImage hex={selectedVariant.hex} />
	<div class="font-bold">{title}</div>
	<div class="flex gap-2">
		{#each variants as variant, index}
			<ColorSwatch
				on:click={() => {
					swatchClicked(index);
				}}
				hex={variant.hex}
				selected={index === selectedIndex}
			/>
		{/each}
	</div>
	<div class="">${selectedVariant.price}</div>
	<div class="">
		<button on:click={addToCartClicked} class="bg-black text-white p-2">Add to Cart</button>
	</div>
</div>
