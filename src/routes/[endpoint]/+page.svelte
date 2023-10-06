<script>
    // import { endPointArray } from '$lib/stores'
	export let data;
    console.log(data.endpointName.endpoint)
</script>

<div class="bg-inherit">
    <h1>{data.endpointName.endpoint}</h1>
    <div><p>{data.endpointName.description}</p></div>
</div>