<script lang='ts'>
	let { data } = $props();
</script>

<div class="flex flex-col items-center justify-center h-full">
	<h1 class="text-4xl font-bold text-gray-800 mb-4">Добро пожаловать в SvelteKit</h1>
	{#if data.user}
		<p class="text-lg text-gray-600 mb-2">Пользователь: <span class="font-semibold">{data.user.username}</span></p>
		<h2 class="text-lg text-gray-600 mb-2">ID: <span class="font-semibold">{data.user.id}</span></h2>
		<h2 class="text-lg text-gray-600 mb-4">Сессия истекает: <span class="font-semibold">{data.session?.expiresAt}</span></h2>
	{:else}
		<p class="text-lg text-gray-600 mb-4">Пожалуйста, войдите или зарегистрируйтесь.</p>
	{/if}

	<!-- <div class="flex space-x-4">
		<a href='/signup' class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">Регистрация</a>
		<a href='/signin' class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200">Вход</a>
	</div> -->
</div>