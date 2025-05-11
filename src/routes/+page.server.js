export async function load() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/postsss');

        if (!response.ok) {
            throw new Error('Network response was not ok' + response.statusText);
        }

        const data = await response.json();
        return { posts: data };
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
        return { posts: [] }; // Return an empty array on error
    }
}