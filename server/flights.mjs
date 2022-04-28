import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';

const BASE_API = 'https://sprout-engineering-challenge.herokuapp.com';
const app = express();
const port = 4000;
const allowedOrigins = ['http://localhost:3000'];

app.use(cors({
  origin: function(origin, callback){
    if(!origin) return callback(null, true);
    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }
}));

app.get('/flights', async function (req, res) {
    const dataFetch = await fetch(`${BASE_API}/flights`);
    const data = await dataFetch.json();
    res.send(data);
});




app.listen(port);