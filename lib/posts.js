import fetch from 'node-fetch';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export async function getAllPostsData() {
  const response = await fetch(new URL(apiUrl));
  const posts = await response.json();

  return posts;
}
