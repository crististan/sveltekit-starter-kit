<script>
    import { enhance } from '$app/forms';
    import Form from '$lib/components/Form.svelte';

    let {
        form
    } = $props();

    console.log("form ---> ", form);
</script>

<Form 
    formTitle="Contact Us"
    formDescription="Please fill out the form below to get in touch with us."
    formFields={[
        { label: "Name", type: "text", name: "name" },
        { label: "Email", type: "email", name: "email" },
        { label: "Message", type: "textarea", name: "message" }
    ]}
    formSubmitLabel="Submit"
    formMessages={form}
/>