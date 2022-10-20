import { IFormData } from "../../hooks/useForm";
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

export async function createPost(formData: IFormData) {
  const request = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ post: formData.post }),
  };
  try {
    const response = await fetch(`${API_URL}/posts.json`, request);
    return response.json();
  } catch (error) {
    console.error("Error", error);
    return {} as IInitialPostsState;
  }
  return {};
}
