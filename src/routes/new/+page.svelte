<script lang="ts">
    import { enhance } from '$app/forms';
	import { Name } from 'drizzle-orm';
    import type { ActionData } from './$types';

    let { form }: { form: ActionData } = $props();
    let bla = $state();
    bla = "Имя";
</script>

<div class="flex items-center justify-center h-full">
    <div class="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <form method="POST" action="?/newaction" 
        use:enhance={(enh) => {console.log(enh.formData.get('newname'))
        bla = enh.formData.get('newname');
        //console.log(enh.formElement);
        }}>
            <div class="mb-4">
                <label class="block text-gray-600 mb-2" for="newname">{bla}</label>
                <input
                    id="newname"
                    name="newname"
                    type="text"
                    class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                />
            </div>
            <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200">Войти</button>
        </form>
    </div>
</div>