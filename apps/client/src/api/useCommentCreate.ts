import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

export const useCommentCreate = () => {
    const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({content, postId}: { content: string, postId: string}) =>
      axios.post(`http://localhost:4001/posts/${postId}/comments`, {content} ),
    onSuccess: () => {      
      queryClient.invalidateQueries({queryKey: ['comments']});
    },
  });
};