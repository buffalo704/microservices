// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { PostCreate } from '../components/PostCreate';
import { PostList } from '../components/PostList';
import styles from './app.module.css';

export function App() {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
      </div>
  );
}

export default App;
