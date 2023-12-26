<script>
	export let hex = '';
	export let selected = false;
</script>

<button
	on:click
	class="border w-6 h-6 rounded-full"
	style:background-color={hex}
	class:border-2={selected}
/>
