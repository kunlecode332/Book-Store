import express from 'express';
import {PORT, mongoDBURL} from './config.js';
import mongoose from 'mongoose';
import booksRoute from './routes/bookRoute.js';
import cors from 'cors';

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
// Option 1: Allow all origins with Default of cors(*)
app.use(cors());
// Option 2: Allow all Custom Origins
// app.use(
//  cors({
//    origin: 'https://www.localhost:3000',
//    methods: ['GET', POST', 'PUT', 'DELETE'],
//    allowedHeaders: ['Content-Type'],
//  })
// );

app.get('/', (req, res) => {
  console.log(req);
  return res.status(234).send('Welcome To MERN Stack Tutorial')
});

app.use('/books', booksRoute);

mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log('App connected to database');
    app.listen(PORT, () => {
      console.log(`App is listening on to port: ${PORT}`);
  });
})
.catch((err) => {
  console.error(err);
});