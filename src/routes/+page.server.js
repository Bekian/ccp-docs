import { endPointArray } from '$lib/stores.js';

export function load() {
	return {
		summaries: endPointArray.map((endpointName) => ({
			endpoint: endpointName.endpoint,
			description: endpointName.description
		}))
	};
}
