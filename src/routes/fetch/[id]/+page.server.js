import { error } from '@sveltejs/kit';

export async function load({ params }) {
	try {
		const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
		const json = await response.json();

		return {
			post: json
		};
	} catch (err) {
		throw error(404);
	}
}
