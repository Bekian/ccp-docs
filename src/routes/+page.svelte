<script>
	import { endPointArray } from '$lib/stores'
	
</script>
<div class="p-5">
	<h2 class="text-2xl font-bold leading-7 text-violet-700 sm:truncate sm:text-3xl sm:tracking-tight">CCP API Documentation</h2>
	<div class="px-4 sm:px-0">
		<h3 class="text-base font-semibold leading-7 text-purple-700">Documentation for CCP API Endpoints</h3>
		<!-- <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p> -->
	</div>
	<div class="mt-6 border-t border-pink-500">
	</div>
	<!-- list -->
	<ul role="list" class="divide-y divide-pink-500 w-2/3 mx-40">
		{#each endPointArray as e}
		<li class="flex flex-col justify-between gap-x-6 py-5">
			<div class="flex min-w-0 gap-x-4">
			  <div class="min-w-0 flex-auto">
				<p class="text-sm font-semibold leading-6 text-fuchsia-600">{e.endpoint}</p>
				<p class="mt-1 flex flex-wrap text-xs leading-5 text-gray-300">{e.description}</p>
			  </div>
			</div>
		  </li>
		{/each}
	  </ul>
</div>

<style lang="postcss">
:global(html) {
    background-color: theme(colors.black);

    
}
</style>