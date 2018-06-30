const { MongoClient } = require('mongodb');

const DB_URL = 'mongodb://localhost:27017';
const DB_NAME = 'tasks';

let dbInstance = null;


const getDB = () => new Promise((resolve) => {
  if (dbInstance !== null) {
    resolve(dbInstance);
  }
  MongoClient.connect(DB_URL, { useNewUrlParser: true }).then((result) => {
    dbInstance = result.db(DB_NAME);
    resolve(dbInstance);
  }).catch((err) => {
    throw err;
  });
});

// const getDB = async () => {

//   MongoClient.connect(DB_URL).then((result) => {
//     dbInstance = result.db(DB_NAME);
//   }).catch((err) => {
//     throw err;
//   });
//   return dbInstance;
// };

module.exports = getDB;
