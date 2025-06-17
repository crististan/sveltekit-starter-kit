<script>
    import { getModalData, closeModal } from "$lib/utils/modal.svelte";
    import { Modal } from "@sveltestrap/sveltestrap";

    let modalData = getModalData();
</script>

<Modal 
    body 
    header={modalData.title}
    isOpen={modalData.isOpen} 
    toggle={closeModal}
>
    {@html modalData.content }
</Modal>