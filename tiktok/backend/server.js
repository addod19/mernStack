import express from 'express';
import mongoose from 'mongoose';

const app = express();

const port = 9002;

app.get('/', (req,res) => res.status(200).send("Hello Daniel Larbi Addo"));

app.listen(port, () => console.log(`listening on localhost:${port}`));