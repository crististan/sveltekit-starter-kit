
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

<!-- /**
add sass to a svelte project
1. Install the necessary packages:
   ```bash
   npm install --save-dev sass svelte-preprocess
   npm install -D sass-embedded
   ```
2. Update your `svelte.config.js` file to include `svelte-preprocess`:
   ```javascript
    // svelte.config.js
    import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

    /** @type {import('@sveltejs/kit').Config} */
    const config = {
    preprocess: vitePreprocess()
    };

    export default config;
    ```
3. Use the `lang="scss"` attribute in your Svelte component's `<style>` tag:
    ```html
    <style lang="scss">
         // Your SCSS code here
    </style>
    ```
4. Create a global SCSS file (e.g `app.scss`) in the src directory and import it in your main layout file:
    ```javascript
    // src/routes/+layout.svelte
    <script>
        import "../app.scss";
    </script>

    <slot />
    ```
*/ -->