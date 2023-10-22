<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1 class="text-white text-4xl my-5">{data.title}</h1>
<div class="text-white text-md">{@html data.content}</div>