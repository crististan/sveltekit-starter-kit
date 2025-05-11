
<script>
    let { data } = $$props;
    let { error } = $$props;
    let { status } = $$props;

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