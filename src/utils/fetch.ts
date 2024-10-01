import axios from "axios";
import { TypePost } from "./types";
import { TypePostForm } from "./schema";

export const fetchPosts = async (): Promise<TypePost[]> => {
  const { data } = await axios({
    url: `${import.meta.env.VITE_API_URL}/posts`,
    method: "GET",
  });

  return data;
};

export const createPost = async (post: TypePost): Promise<TypePost> => {
  const { data } = await axios({
    url: `${import.meta.env.VITE_API_URL}/posts`,
    method: "POST",
    data: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json",
    },
  });

  return data;
};
