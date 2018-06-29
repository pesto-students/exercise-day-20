const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const { getTaskList } = require('./apiFunctions');

const PORT = 8080;

const app = express();

app.use(morgan('dev'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.get('/', async (req, res) => {
  const response = await getTaskList();
  res.json(response);
});


app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
