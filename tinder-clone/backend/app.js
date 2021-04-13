import express from 'express';
import connectDB from './config/db.js';

import Cards from './dbCards.js';

// App config
const app = express();
const port = process.env.PORT || 8082;

// connect database
connectDB();

// Middlewares


// API Endpoints
app.get('/', (req, res) => res.status(200).send('Hello world!!'));

app.post('/tinder/card', (req, res) => {
    const dbCard = res.body;

    Cards.create(dbCard, (error, data) => {
        if(error) {
            req.status(500).send(error);
        }
        else {
            res.status(201).send(`Created data: ${data}`);
        }
    })
})

app.get('/tinder/card', (req, res) => {
    const dbCard = res.body;

    Cards.find((error, data) => {
        if(error) {
            req.status(500).send(error);
        }
        else {
            res.status(200).send(data);
        }
    })
})
// Listener
app.listen(port, () => console.log(`Server running on port ${port}`));
