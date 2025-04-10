import type { Actions, PageServerLoad } from './$types';

//код взят: https://v3.lucia-auth.com/tutorials/username-and-password/sveltekit
//Action формы входа
export const actions: Actions = {
    newaction: async (event) => {
        const formData = await event.request.formData();
        const newname = formData.get("newname");
        console.log(newname);
    }
}