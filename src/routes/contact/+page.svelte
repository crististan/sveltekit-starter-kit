<script>
    import Form from '$lib/components/Form.svelte';

    let {
        form
    } = $props();
</script>

<Form 
    formTitle="Contact Us"
    formDescription="Please fill out the form below to get in touch with us."
    formFields={[
        { label: "Name", type: "text", name: "name" },
        { label: "Email", type: "email", name: "email" },
        { label: "Message", type: "textarea", name: "message" }
    ]}
    formSubmitAction={(e) => {
        e.preventDefault();
        console.log("Form submitted");
    }}
    formSubmitLabel="Submit"
    formMessage={{
        type: "success",
        message: "Your message has been sent successfully!"
    }}
/>