export interface Variant {
	name: string;
	hex: string;
	price: number;
	sku: string;
}

export interface CartState {
	[key: string]: Variant;
}
