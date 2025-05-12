# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

# Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```bash
# create a new project in the current directory
npx sv create

# create a new project in my-app
npx sv create my-app
```

# Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

# Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

# How to add Sass to a SvelteKit project

## Installation

1. Install dependencies:
   ```bash
   npm install --save-dev sass svelte-preprocess
   npm install -D sass-embedded
   ```

## Configuration

2. Update `svelte.config.js`:
   ```javascript
   import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
   
   const config = {
     preprocess: vitePreprocess()
   };
   
   export default config;
   ```

## Usage

3. In your .svelte files, use:
   ```svelte
   <style lang="scss">
     // SCSS code here
   </style>
   ```

4. To add global styles:
   - Create `app.scss` file in your project
   - Import it in `+layout.svelte`:
   ```svelte
   <script>
     import "../app.scss";
   </script>
   ```

# How to add Bootstrap to a SvelteKit project using Sveltetrap

## Installation

1. Install the Sveltetrap package using one of the following commands:

    ```bash
    # npm
    npm install @sveltestrap/sveltestrap

    # pnpm
    pnpm install @sveltestrap/sveltestrap

    # yarn
    yarn add @sveltestrap/sveltestrap
    ```

2. Add the stylesheet manually in "+layout.svelte" file or in CSS bundle:

    ```svelte
    <svelte:head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css">
    </svelte:head>
    ```

    or

    ```css
    <style>
        @import 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.6/dist/css/bootstrap.min.css';
    </style>
    ```

## Usage

3. Import and use Sveltestrap components in your svelte component

    ```svelte
    <script>
        import { Button, Col, Row } from '@sveltestrap/sveltestrap';
    </script>

    <Row>
        <Col>
            <Button color="primary" outline>Hello World!</Button>
        </Col>
    </Row>
    ```