
const api = require('./routes.js');
const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 
app.use('/movies', api);

app.listen(3000, () => console.log('CRUD app listening on port 3000!'));


