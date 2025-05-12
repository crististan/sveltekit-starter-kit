<script>
    import { 
        Modal
    } from '@sveltestrap/sveltestrap';

    let { 
        isOpen,
        toggle,
        modalHeader,
        modalBody
    } = $props();
</script>

<Modal 
    body 
    header={ modalHeader }
    {isOpen} 
    {toggle}
>
    { modalBody }
</Modal>