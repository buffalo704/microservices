import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';
import cors from 'cors';
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 4002;

const app = express();
app.use(bodyParser.json());
app.use(cors());

const posts = {};

const handleEvent = (type, data) => {
  switch (type) {
    case 'PostCreated': {
      const { id, title } = data;
      posts[id] = { id, title, comments: [] };
      break;
    }
    case 'CommentCreated': {
      const { id, content, postId, status } = data;

      const post = posts[postId];
      post.comments.push({ id, content, status });
      break;
    }
    case 'CommentUpdated': {
      const { id, content, postId, status } = data;

      const post = posts[postId];
      const comment = post.comments.find((comment) => comment.id === id);

      comment.status = status;
      comment.content = content;
    }
  }
};
app.get('/posts', (req, res) => {
  res.send(posts);
});

app.post('/events', (req, res) => {
  const { type, data } = req.body;

  handleEvent(type, data);

  res.send({});
});

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.listen(port, host, async () => {
  console.log(`[ ready ] http://${host}:${port}`);




  const res = await axios.get('http://event-bus-srv:4005/events').catch((err) => {
    console.log(err.message);
  });  ;

  if (!res) {
    return;
  }

  if (res.data.length === 0) {
    return;
  }
  
  for (const event of res.data) {
    console.log('Processing event:', event.type);

    handleEvent(event.type, event.data);
  }
  
});
