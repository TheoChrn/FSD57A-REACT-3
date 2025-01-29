import { API_URL } from "@/lib/utils";
import axios from "axios";

export const getPosts = async (): Promise<IPost[]> => {
  const res = await axios.get<IPost[]>(`${API_URL}/posts?_limit=10`);
  return JSON.parse(JSON.stringify(res.data));
};
