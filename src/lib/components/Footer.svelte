<script>
	import { getContext } from 'svelte';
	import FooterLink from './FooterLink.svelte';

	const title = getContext('site.title');
</script>

<footer class="bg-gray-200 text-white p-6 flex flex-wrap gap-6 justify-between">
	<div class="">&copy;2023 {title}</div>
	<div class="text-blue flex flex-wrap gap-6">
		<FooterLink href="/about">About</FooterLink>
		<FooterLink href="/contact">Contact</FooterLink>
		<FooterLink href="/support">Support</FooterLink>
		<FooterLink href="/privacy">Privacy</FooterLink>
	</div>
</footer>
