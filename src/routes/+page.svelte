<script>
	let rtl = false;

	function toggleRTL() {
		rtl = !rtl;
	}
</script>

<button on:click={toggleRTL}>Toggle RTL</button>

<div class="grid gap-6" dir={rtl ? 'rtl' : 'ltr'}>
	<header class="border p-4 flex gap-6 justify-between items-center">
		<div class="font-bold uppercase text-24 text-blue">Logitech</div>
		<div class=""><iconify-icon class="text-30" icon="mdi:cart-outline" /></div>
	</header>

	<main class="grid gap-6 md:[grid-template-columns:250px_auto]">
		<div class="border p-6">Filters</div>
		<div class="border p-6">
			<h1>Main content</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure illum similique suscipit harum
				excepturi neque eum debitis quod, commodi sit sunt ad nihil dolores nulla tempora
				consequuntur numquam eligendi atque!
			</p>
		</div>
	</main>

	<footer class="bg-gray-200 text-white p-6 flex flex-wrap gap-6 justify-between">
		<div class="">&copy;2023 Logitech</div>
		<div class="text-blue flex flex-wrap gap-6">
			<a href="#" class="hover:underline">About</a>
			<a href="#" class="hover:underline">Contact</a>
			<a href="#" class="hover:underline">Support</a>
			<a href="#" class="hover:underline">Privacy</a>
		</div>
	</footer>
</div>
