import { readonly } from 'svelte/store';
import { cartOpen } from './cartOpen';
import { persisted } from 'svelte-persisted-store';
import type { CartState, Variant } from '$lib/types';

const items = persisted('cart.items', {});

export const addToCart = (title: string, variant: Variant): void => {
	const productData = { title, ...variant };
	items.update((state: CartState) => {
		const sku = variant.sku;
		state[sku] = productData;

		console.log(state);
		return state;
	});

	cartOpen.set(true);
};

export const removeFromCart = (sku: string) => {
	items.update((state: CartState) => {
		delete state[sku];
		return state;
	});
};

export const cartItems = readonly(items);
