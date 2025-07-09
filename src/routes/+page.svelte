<script>
    import { 
        Row,
        Col,
        Button
    } from '@sveltestrap/sveltestrap';
    import { showModal } from '$lib/utils/modal.svelte.js';
    import { showToast } from '$lib/utils/toast.svelte.js';

    import Card from '$lib/components/Card.svelte';
    
    let { 
        data,
        error,
        status
    } = $props();

    console.log('data: ', data);
    console.log('error: ', error);
    console.log('status: ', status);
</script>

<main>
    <button class="btn btn-outline-primary" onclick={() => showToast("This is a success toast message", "success")}>Show success toast</button>
    <button class="btn btn-outline-primary" onclick={() => showToast("This is an info toast message", "info")}>Show info toast</button>

    {#if data.posts.length > 0}
        <h1>Posts</h1>
        <Row>
            {#each data.posts as post}
                <Col 
                    xs="12" 
                    md="6" 
                    lg="3"
                    class="mb-4"
                >
                    <Card
                        cardTitle={post.title}
                        cardImage={{
                            src: "https://cdn.pixabay.com/photo/2025/03/31/21/18/tiber-river-9505401_1280.jpg",
                            alt: "image"
                        }}
                        cardDescription={post.body}
                        cardButton={{
                            label: "Details",
                            onClick: () => showModal(post.title, `<strong>${post.body}</strong>`)
                        }}
                    />
                </Col>
            {/each}
        </Row>
    {:else}
        <p>No data available.</p>
    {/if}
</main>


<style lang="scss">
    main {
        padding: 1rem;
        background-color: #f0f0f0;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);   
    }

    h1 {
        color: var(--primary-color);
        font-size: 20px;
        margin: 12px 0
    }
    @media (min-width: 768px) {
        h1 {
        font-size: 24px;
    }
    }
</style>