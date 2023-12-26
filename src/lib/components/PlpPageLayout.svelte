<script>
	import ProductCard from './ProductCard.svelte';
	import { mockProducts } from '../js/mockProducts';
</script>

<main class="grid gap-6 md:[grid-template-columns:250px_auto]">
	<div class="border p-6">Filters</div>
	<div class="border p-6">
		<h1>Products</h1>

		<div class="grid gap-6 lg:grid-cols-3 grid-cols-2">
			{#each mockProducts as product}
				<ProductCard {...product} />
			{/each}
		</div>
	</div>
</main>
