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

