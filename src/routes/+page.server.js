import { fetchData } from "$lib/utils/api";

export async function load() {
    const posts = await fetchData('https://jsonplaceholder.typicode.com/postsa');
    
    return {
        posts
    };
}