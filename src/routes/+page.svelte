<script>
	import { endPointArray } from '$lib/stores'
	import '$lib/sum.js'
</script>

	<!-- list -->
<ul role="list" class="divide-y divide-pink-500 md:w-3/4 md:mx-32">
{#each endPointArray as {endpoint, description}}
	<li class="flex flex-col justify-between gap-x-6 py-5">
		<div class="flex min-w-0 gap-x-4">
			<div class="min-w-0 flex-auto">
				<a class="text-md font-semibold leading-6 text-fuchsia-600 no-underline" href={endpoint}>{endpoint}</a>
				<p class="mt-1 text-xs leading-5 text-gray-300">{@html description}</p>
				<a class="bg-violet-800 text-neutral-300 rounded-md px-3 py-0 text-md float-right" href="{endpoint}">{endpoint}</a>
			</div>
		</div>
	</li>
{/each}
</ul>

