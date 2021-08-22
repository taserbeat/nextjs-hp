import fetch from 'node-fetch';

const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

export async function getAllPostsData() {
  const response = await fetch(new URL(apiUrl));
  const posts = await response.json();

  return posts;
}

export async function getAllPostIds() {
  const response = await fetch(new URL(apiUrl));
  const posts = await response.json();

  return posts.map((post) => {
    return {
      params: {
        id: String(post.id),
      },
    };
  });
}

export async function getPostData(id) {
  const response = await fetch(new URL(`${apiUrl}/${id}/`));
  const post = await response.json();

  return post;
}
