const express = require('express');
const parser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express();
app.use(parser.json());
app.use(cors());


//api routes
const routes = require('./routes/index.js');
app.use('/api', routes);


//mongodb connection
mongoose.connect('mongodb://localhost:27017',
  () => console.log('app connected with mongodb!'))


const port = 3000;
app.listen(port, () => console.log(`server started on port ${port}`));
