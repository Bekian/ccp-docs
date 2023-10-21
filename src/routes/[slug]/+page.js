import { error } from '@sveltejs/kit';
import { endPointArray } from '$lib/stores'

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
	
	// looks for an endpoint in endpointArray that matches the current slug
	for(var i = 0; i < endPointArray.length; i++) {
		var obj = endPointArray[i]
		if (obj.endpoint == '/' + params.slug) {
			return {
				title: obj.endpoint,
				content: obj.description
			}
		}
	}

	throw error(404, 'Not found');
}