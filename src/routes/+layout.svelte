<script>
    import "../app.scss";
    import { Container } from "@sveltestrap/sveltestrap";
    import Modal from "$lib/components/Modal.svelte";
    import Toast from "$lib/components/Toast.svelte";
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.css">
</svelte:head>

<Container>
    <slot />
</Container>

<Modal />
<Toast />