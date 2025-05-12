<script>
    import "../app.scss";
    import { Container } from "@sveltestrap/sveltestrap";
</script>

<svelte:head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css">
</svelte:head>

<Container>
    <slot />
</Container>