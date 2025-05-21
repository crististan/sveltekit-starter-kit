import { z } from 'zod';
import { 
    fail,
    redirect
} from '@sveltejs/kit';

const schema = z.object({
    name: z.string().min(3).max(50),
    email: z.string().email().min(5).max(50),
});

export const actions = {
    default: async ({ request }) => {
        const formData = Object.fromEntries(await request.formData());
        const validation = schema.safeParse(formData);
        
        if (!validation.success) {
            const errors = validation.error.errors.map((error) => {
                return {
                    field: error.path[0],
                    message: error.message
                }
            });

            // return fail(400, {
            //     success: false,
            //     errors: errors,
            // });

            return {
                success: false,
                message: errors,
            }
        }

        // redirect to success page
        // redirect(303, '/contact/success');

        return {
            success: true,
            message: "Form submitted successfully!",
        }
    }
}