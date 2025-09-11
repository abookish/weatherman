import express from 'express';
import { connectToMongoDatabase } from '../config/db.js';


await connectToMongoDatabase()

//todo handle remove fake data?

const app = express();
app.use(express.json());

// Health check endpoint
app.get('/', (req, res) => {
  res.send({ ok: true });
  //todo more?
});

// todo manual trigger endpoint??

//todo db connecction script


app.listen(3000, () => console.log('Server running on port 3000'));
