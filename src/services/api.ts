export const fetchPosts = () =>
  fetch('/api/posts').then((response) => response.json());

export const fetchPostsByUser = (profile: string) =>
  fetch(`/api/posts/${profile}`).then((response) => response.json());

export const fetchUser = (profile: string) =>
  fetch(`/api/users/${profile}`).then((response) => response.json());
