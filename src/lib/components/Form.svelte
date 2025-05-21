<script>
    import { enhance } from '$app/forms';
    import { 
        FormGroup,
        Input, 
        Button 
    } from '@sveltestrap/sveltestrap';

    let {
        formTitle,
        formDescription,
        formFields,
        formSubmitLabel,
        formMessages,
    } = $props();
  </script>

<form
    class="mb-3"
    method="post"
    action="/contact"
    use:enhance
    novalidate
>
    {#if formTitle}
      <h2>{formTitle}</h2>
    {/if}
    {#if formDescription}
      <p>{formDescription}</p>
    {/if}
    {#each formFields as field}
        <FormGroup floating label={field.label} for={field.name}>
        {#if field.type === 'textarea'}
            <Input type="textarea" name={field.name} id={field.name} placeholder={field.label} />
        {:else}
            <Input type={field.type} name={field.name} id={field.name} placeholder={field.label} />
        {/if}
        </FormGroup>
    {/each}
    {#if formMessages}
        {#each formMessages.message as formMessage}
            <div class="alert alert-{formMessage.success ? "success" : "danger"}" role="alert">
                {formMessage.message}
            </div>
        {/each}
    {/if}
    <Button type="submit" color="primary">{ formSubmitLabel }</Button>
</form>