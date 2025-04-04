<script lang="ts">
    import { enhance } from '$app/forms';
    import type { ActionData } from './$types';

    let { form }: { form: ActionData } = $props();
</script>

<div class="flex items-center justify-center h-full">
    <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 class="text-3xl font-bold text-center text-gray-700 mb-6">Вход</h1>
        <form method="POST" action="?/signin" use:enhance>
            <div class="mb-4">
                <label class="block text-gray-600 mb-2" for="username">Пользователь</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <div class="mb-4">
                <label class="block text-gray-600 mb-2" for="password">Пароль</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">Войти</button>
        </form>
    </div>
</div>