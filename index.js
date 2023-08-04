'use strict';

let quotes = require('./quotes.json');
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const port = process.env.PORT;

const app = express();

app.listen(port, ()=> console.log(`server running on ${port}`));

app.use(cors());

// Process JSON input and put the data on req.body
app.use(express.json());

// Process FORM intput and put the data on req.body
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  console.log('get request recieved');
  res.status(200).send('default route working');
});

app.post('/', (req, res) => {
  quotes.quotes.push(req.body);
  console.log(quotes);
  res.status(200).json(quotes);
});

app.use('*', (req, res, next) => {
  res.status(404).send('incorrect route');
});

app.use((error, req, res, next) => {
  console.log(error);
  res.status(500).send(error.message);
});