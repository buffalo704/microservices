import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

export const usePostCreate = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (title: {title: string}) => axios.post('http://localhost:4000/posts',  title ),
    onSuccess: () => {
        queryClient.invalidateQueries({queryKey: ['posts']});
      },
  });
};
