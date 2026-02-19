// import Promise from 'promise';
import { MongoClient } from 'mongodb';
const url = 'mongodb://localhost/TestDB';
MongoClient.connect(url).then(function (err,db) {
    db.collection('Test').updateOne({
        "Name": "Joe"
        },
    {
        $set:  {
            "Name" : "Beck"
        }
    });
})
.catch(error => console.error(error.message))

