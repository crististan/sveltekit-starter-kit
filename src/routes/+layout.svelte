<script>
    import "../app.scss";
    import { Container } from "@sveltestrap/sveltestrap";
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

<Modal />
<Toast />