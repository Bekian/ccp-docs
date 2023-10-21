import { error } from '@sveltejs/kit';
// map this to results
//import { endPointArray } from '$lib/stores'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	
	if (params.slug === 'trivia') {
		return {
			title: 'Trivia',
			content: 'The "/trivia" endpoint in a JSON response API delivers engaging trivia questions and answers. It serves as a valuable resource for developers seeking to incorporate trivia quizzes into their applications, boosting user interaction and knowledge.'
		};
	}

	throw error(404, 'Not found');
}