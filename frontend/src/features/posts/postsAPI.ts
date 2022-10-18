import { IInitialPostsState } from "../../store/reducers/posts";

const API_URL = "http://localhost:3000";

export async function fetchPosts() {
  const request = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const response = await fetch(`${API_URL}/posts.json`, request);
    return response.json();
  } catch (error) {
    console.error("Error", error);
    return {} as IInitialPostsState;
  }
}
