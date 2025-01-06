const { MongoClient } = require('mongodb');
const url = "";
const client = new MongoClient(url);
const dbName = 'HelloWorld';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');
  await collection.insertOne({firstName:"Akshay", lastName:"Saini", age:30, city:"Dehradun", phoneNumber:"9878382838"})
  // the following code examples can be pasted here...
  const users = await collection.find({}).toArray();
  console.log(users,"===");
  

  return 'done.';
}
main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());