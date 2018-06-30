const fetch = require('node-fetch');

const getTaskFromServer = async () => {
  const response = await fetch('http://localhost:8080');
  const task = await response.json();
  return task;
};

export default getTaskFromServer;

