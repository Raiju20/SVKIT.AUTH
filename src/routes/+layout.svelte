<script lang="ts">
	import '../app.css';
	import type { LayoutProps } from './$types';
	let { data, children }: LayoutProps = $props();

	import SignoutForm from '$lib/components/signoutForm.svelte';
</script>

<div class="min-h-screen bg-gray-100 flex flex-col">
	<header class="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 shadow-lg">
		<h1 class="text-4xl font-bold">App</h1>
		<p class="mt-2 text-lg">Your tagline or description goes here</p>
	</header>

	<main class="flex-grow flex items-center justify-center p-6">
		<div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
			{@render children()}
		</div>
	</main>

	{#if data.session}
		<footer class="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-4">
			<SignoutForm />
		</footer>
	{/if}
</div>