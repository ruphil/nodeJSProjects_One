import { MongoClient } from 'mongodb';

const url = 'mongodb://localhost:27017';

class MongoClientClass {
  async readData(){
    const client = await MongoClient.connect(url, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    });

    const db = client.db('testDB');
    // execute find query
    const items = await db.collection('UsersList').find({}).toArray();
    console.log(items);
    // close connection
    client.close();
  }

  async insertData(){
    const client = await MongoClient.connect(url, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true,
    });

    const db = client.db('testDB');

    const collection = db.collection('Users');
    let j = await collection.insertOne({ 
      "TrinityF90+244": {
        flightID: '123',
        area: 1.2
      }
    });
    console.log(j.result);
    
    client.close();
  }
}

const clientObj = new MongoClientClass();
clientObj.insertData();
clientObj.readData();

// const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
// // console.log(client);

// const dbName = 'testdbd';
// client.connect(function(err) {
//     console.log('Connected successfully to server');
  
//     const db = client.db(dbName);
//     let collection = db.collection('jack');

//     collection.insertOne({a:2});
  
//     client.close();
//   });