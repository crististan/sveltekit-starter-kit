export const actions = {
    default: async ({ request }) => {
        const formData = await request.formData();
        const data = Object.fromEntries(formData);
        console.log("Form data received: ", data);

        return {
            success: true,
            message: "Form submitted successfully!",
        }
    }
}