// 'use strict';

// let quotes = require('./quotes.json');
// const express = require('express');

// const port = process.env.PORT;

// const app = express();

// app.listen(port, ()=> console.log(`server running on ${port}`));

// // Process JSON input and put the data on req.body
// app.use(express.json());

// // Process FORM intput and put the data on req.body
// app.use(express.urlencoded({ extended: true }));

// app.get('/', (req, res) => {
//   res.status(200).send('default route working');
// });

// app.post('/', (req, res) => {
//   console.log(req.body);
// });

// app.use((error, req, res, next) => {
//   console.log(error);
//   res.status(500).send(error.message);
// });