import { error } from '@sveltejs/kit';
import { endPointArray } from '$lib/stores';

export function load({ params }) {
    const endpointName = endPointArray.find((endpointName) => endpointName.endpoint === params.endpoint);

    if (!endpointName) throw error(404);

    return {
        endpointName
    };
}
