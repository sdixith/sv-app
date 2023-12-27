/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import { persisted } from 'svelte-persisted-store';

export const cartOpen = persisted('cart.open', false, { storage: 'session' });
