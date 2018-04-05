const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routes/index');

const app =express();

app.use(bodyParser());
app.use('/', router);

app.listen( 5000, ()=> {
    console.log('server is live on localhost:5000')
})
