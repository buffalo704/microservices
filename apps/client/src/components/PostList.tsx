import { CommentCreate } from './CommentCreate';
import { CommentList } from './CommentList';
import { usePostList } from '../api/usePostList';

export const PostList = () => {  
  const { data } = usePostList();

  const posts = Object.values(data).map((post: any) => {    
    return (
        <div
            className="card"
            style={{ width: '30%', marginBottom: '20px' }}
            key={post.id}
        >
            <div className="card-body">
            <h3>{post.title}</h3>
            <CommentList comments={post.comments} />
            <CommentCreate postId={post.id} />
            </div>
        </div>
        );  
    });

  return <div className="d-flex flex-row flex-wrap justify-content-between">{posts}</div>;
};
