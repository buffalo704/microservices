import express from 'express';
import bodyParser from 'body-parser';
import axios from 'axios';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 4003;

const app = express();
app.use(bodyParser.json());

app.post('/events', async (req, res) => {
  const { type, data } = req.body;

  switch (type) {
    case 'CommentCreated': {
      const status = data.content.includes('orange') ? 'rejected' : 'approved';
      await axios.post('http://event-bus-srv:4005/events', {
        type: 'CommentModerated',
        data: {
          ...data,
          status,
        },
      });
    }
  }
  res.send({});
});

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
