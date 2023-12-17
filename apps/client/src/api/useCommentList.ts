import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useCommentList = (postId: string) => useQuery({
    queryKey: ['comments', postId],
    queryFn: async () => {
      const response = await axios.get(
        `http://posts.com/posts/${postId}/comments`
      );
      return response.data;
    },  
    initialData: [],  
  });