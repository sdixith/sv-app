<script>
	let _class = '';
	export { _class as class };
</script>

<button class="border-2 p-2 uppercase font-bold px-4 py-4 rounded-full {_class}"><slot /></button>
