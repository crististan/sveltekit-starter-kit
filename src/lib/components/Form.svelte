<script>
    import { 
        Form, 
        FormGroup,
        Input, 
        Button 
    } from '@sveltestrap/sveltestrap';

    let {
        formTitle,
        formDescription,
        formFields,
        formSubmitAction,
        formSubmitLabel,
        formMessage,
    } = $props();
  </script>

<Form
    class="mb-3"
    onsubmit={formSubmitAction}
    method="POST"
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
    <Button type="submit" color="primary">{ formSubmitLabel }</Button>
</Form>