<script>
    import "../app.css";
    import { Container } from "@sveltestrap/sveltestrap";
    import BootstrapModal from "$lib/components/BootstrapModal.svelte";
    import Modal from "$lib/components/Modal.svelte";
    import Toast from "$lib/components/Toast.svelte";
</script>

<svelte:head>
    <link rel="stylesheet" href="/vendor/css/bootstrap/bootstrap.min.css">
    <link rel="stylesheet" href="/vendor/css/bootstrap-icons/bootstrap-icons.css">
</svelte:head>

<Container>
    <slot />
</Container>

<!-- <BootstrapModal /> -->
<Modal />
<Toast />