<script>
    import { 
        Row,
        Col, 
        Card,
        CardHeader,
        CardBody,
        CardTitle,
        CardText,
        Button
    } from '@sveltestrap/sveltestrap';

    import Modal from '$lib/components/Modal.svelte';
    
    let { 
        data,
        error,
        status
    } = $props();

    let isModalOpen = $state(false);
    let modalHeader = $state("");
    let modalBody = $state("");

    const showModal = (header, body) => {
        isModalOpen = !isModalOpen;
        modalHeader = header || "";
        modalBody = body || "";
    };

    console.log('data: ', data);
    console.log('error: ', error);
    console.log('status: ', status);
</script>

<main>
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
                    <Card>
                        <CardHeader>
                          <CardTitle>{ post.title }</CardTitle>
                        </CardHeader>
                        <CardBody>
                            <CardText>{ post.body }</CardText>
                            <Button 
                                color="primary" 
                                outline
                                on:click={() => showModal(post.title, post.body)}
                            >Details</Button>
                        </CardBody>
                    </Card>
                </Col>
            {/each}
        </Row>
    {:else}
        <p>No data available.</p>
    {/if}

    <Modal
        isOpen={isModalOpen}
        toggle={showModal}
        {modalHeader}
        {modalBody}
    />
</main>

<style lang="scss">
    main {
        padding: 1rem;
        background-color: #f0f0f0;
        border-radius: 8px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);   
        
        h1 {
            color: var(--primary-color);
        }
    }
</style>