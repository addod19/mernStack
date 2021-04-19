import express from 'express';

import connectDB from './config/db.js';
import Data from './data.js';

// app config
const app = express();
const port = 9003;

// middlewares
app.use(express.json());

// db config
connectDB();

// api endpoints
app.get('/', (req,res) => res.status(200).send("Hello Daniel Larbi Addo"));


app.get('/v1/posts', (req, res) => {
    
    Data.find((error, data) => {
        console.log(data);
        if(error) {
            res.status(500).send(error);
        }
        else {
            res.status(200).send(data);
        }
    })
})

app.post('/v2/posts', (req, res) => {
    const dbData = req.body;

    Cards.create(dbData, (error, data) => {
        if(error) {
            res.status(500).send(error);
        }
        else {
            res.status(201).send(`Created data: ${data}`);
            console.log(data);
        }
    })
})

// listen
app.listen(port, () => console.log(`listening on localhost:${port}`));