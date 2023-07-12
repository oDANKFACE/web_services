const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes');
const mongodb = require('./mongo');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 3000;


app.use('/', router);


app.listen(port, () => {
    console.log('Web Server is listening at port ' + port);
})

mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to db');
    }
})