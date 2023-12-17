import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePostList = () => useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
        const response = await axios.get('http://posts.com/posts');
        return response.data;
    },    
    initialData: [],
  });