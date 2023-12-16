import React, { ChangeEvent, useState } from 'react';
import { useCommentCreate } from '../api/useCommentCreate';

export const CommentCreate = ({ postId }: { postId:string}) => {
  const [content, setContent] = useState('');
  const {mutateAsync} = useCommentCreate();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setContent(event.target.value);
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await mutateAsync({content, postId});
    setContent('');
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>New Comment</label>
          <input className="form-control" onChange={handleChange} value={content}/>
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
