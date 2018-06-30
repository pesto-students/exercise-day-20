const getDB = require('./database');
// import express from 'express';
// import morgan from 'morgan';
// import { urlencoded, json } from 'body-parser';
// import cors from 'cors';
// import getDB from './database';

// const PORT = 8080;

// const app = express();

// app.use(morgan('dev'));

// app.use(urlencoded({ extended: true }));
// app.use(json());

// app.use(cors());

getDB().then(async (db) => {
  db.collection('name').insert({ name: 'hello1' });
  const data = await db.collection('name').find({}).toArray();
  console.log(data);
}).catch((err) => {
  console.log(err);
});
// console.log(dbHere.find());

// logging();

// app.get('/', (req, res) => {
//   res.json('Response from server');
// });

// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });
