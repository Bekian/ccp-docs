<script>
    import "../app.css";
    //import page from "$app/stores";
    
</script>
<svelte:head>
    <title>CCP API Docs</title>
</svelte:head>

<div class="m-10">
    <div class="flex flex-row">
        <div class="flex flex-col">
            <h2 class="text-4xl font-bold leading-7 text-violet-700 sm:truncate sm:text-3xl sm:tracking-tight">CCP API Documentation</h2>
            <div class="px-4 sm:px-0">
                <h3 class="text-base font-semibold leading-7 text-purple-700">Documentation for CCP API Endpoints</h3>
                <!-- <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p> -->
            </div>
        </div>
    </div>
	<div class="mt-6 border-t border-pink-500"></div>
    <slot />
</div>