import { readonly, writable } from 'svelte/store';
import { cartOpen } from './cartOpen';

/**
 * {
 *
 * }
 */

const items = writable({});

export function addToCart(title, variant) {
	const productData = { title, ...variant };
	items.update((state) => {
		const sku = variant.sku;
		state[sku] = productData;

		console.log(state);
		return state;
	});

	cartOpen.set(true);
}

export function removeFromCart(sku) {
	items.update((state) => {
		delete state[sku];
		return state;
	});
}

export const cartItems = readonly(items);
