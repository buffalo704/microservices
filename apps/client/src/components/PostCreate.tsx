import { ChangeEvent, FormEvent, useState } from 'react';
import { usePostCreate } from '../api/usePostCreate';

export const PostCreate = () => {
  const [title, setTitle] = useState('');
    // const queryClient = useQueryClient();

   const { mutate } = usePostCreate();
  // const mutation = useMutation({
  //   mutationFn: () => axios.post('http://localhost:4000/posts', { title }),
  //   onSuccess: () => {
  //       queryClient.invalidateQueries({queryKey: ['posts']});
  //     },
  // });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    mutate({ title });

    setTitle('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input
            className="form-control"
            onChange={handleChange}
            value={title}
          />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
