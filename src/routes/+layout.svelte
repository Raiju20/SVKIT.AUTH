<script lang="ts">
	import '../app.css';
	import type { LayoutProps } from './$types';
	let { data, children }: LayoutProps = $props();

	import SignoutForm from '$lib/components/signoutForm.svelte';
</script>

<div class="min-h-screen bg-gray-100 flex flex-col">
	<header class="bg-gradient-to-r from-purple-500 to-indigo-600 text-white p-6 shadow-lg">
		<h1 class="text-4xl font-bold">App</h1>
		<nav class="mt-4">
			<ul class="flex space-x-6">
				<li>
					<a href="/" class="hover:text-gray-200 transition duration-200">Home</a>
				</li>
				<li>
					<a href="/signin" class="hover:text-gray-200 transition duration-200">Sign In</a>
				</li>
				<li>
					<a href="/signup" class="hover:text-gray-200 transition duration-200">Sign Up</a>
				</li>
				<li>
					<a href="/chinook" class="hover:text-gray-200 transition duration-200">Chinook</a>
				</li>
				<li>
					<a href="/new" class="hover:text-gray-200 transition duration-200">New</a>
				</li>
			</ul>
		</nav>
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