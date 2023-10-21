<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1 class="text-white">{data.title}</h1>
<div class="text-white">{@html data.content}</div>