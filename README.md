# SvelteKit Starter Kit

A starter kit for SvelteKit projects to help developers quickly set up and start a new project with best practices and a structured environment.

## Features

- **SASS Support**: Pre-installed SASS for advanced styling capabilities.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**

    ```bash
    git clone https://github.com/crististan/sveltekit-starter-kit.git
    cd sveltekit-starter-kit
    ```

2. **Install dependencies:**

    Using npm:
    ```bash
    npm install
    ```

    Using Yarn:
    ```bash
    yarn install
    ```

3. **Rename the project:**

    Change the project name in `package.json`:
    ```json
    {
      "name": "your-project-name",
      ...
    }
    ```

    and in package-lock.json:
    ```json  
    {
      "name": "your-project-name",
      ...
      "packages": {
        "": {
        "name": "your-project-name",
        ...
      }
    }
    ```

### Development

To start the development server:

```bash
npm run dev
```

or

```bash
yarn dev
```

Open your browser and navigate to [http://localhost:3000](http://localhost:3000). You should see your SvelteKit app running.

