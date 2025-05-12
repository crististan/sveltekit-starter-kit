<script>
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
    {#if data.posts.length > 0}
        <h1>Data from the server:</h1>
        <pre>{JSON.stringify(data, null, 2)}</pre>
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
        
        h1 {
            color: var(--primary-color);
        }
    }
</style>