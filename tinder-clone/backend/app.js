import express from 'express';
import connectDB from './config/db.js';

import Cors from 'cors';

import Cards from './dbCards.js';

// App config
const app = express();
const port = process.env.PORT || 8082;

// connect database
connectDB();

// Middlewares
app.use(express.json());
app.use(Cors());

// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello world!!'));

app.post('/tinder/cards', (req, res) => {
    const dbCard = res.body;

    Cards.create(dbCard, (error, data) => {
        if(error) {
            res.status(500).send(error);
        }
        else {
            res.status(201).send(`Created data: ${data}`);
        }
    })
})

app.get('/tinder/cards', (req, res) => {
    const dbCard = res.body;
    
    Cards.find((error, data) => {
        console.log(data);
        if(error) {
            res.status(500).send(error);
        }
        else {
            res.status(200).send(data);
        }
    })
})
// Listener
app.listen(port, () => console.log(`Server running on port ${port}`));
