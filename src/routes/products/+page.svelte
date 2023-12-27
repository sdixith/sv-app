<script>
	import ProductCard from '$lib/components/ProductCard.svelte';

	export let data;
</script>

<main class="grid gap-6 md:[grid-template-columns:250px_auto]">
	<div class="border p-6">Filters</div>
	<div class="border p-6">
		<h1>Products</h1>

		<div class="grid gap-6 lg:grid-cols-3 grid-cols-2">
			{#each data.products as product}
				<ProductCard {...product} />
			{/each}
		</div>
	</div>
</main>
