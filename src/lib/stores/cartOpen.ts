import { persisted } from 'svelte-persisted-store';

export const cartOpen = persisted('cart.open', false, { storage: 'session', syncTabs: false });
