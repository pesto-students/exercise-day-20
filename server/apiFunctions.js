const { getDb } = require('./database');

const getTaskList = async () => {
  const db = await getDb();
  const taskList = await db.collection('MyTask').find().toArray();
  return taskList;
};

module.exports = {
  getTaskList,
};
