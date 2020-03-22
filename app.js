const express = require('express');
const calculator = require('./controllers/calculator');

const app = express();

app.use('/assets', express.static('assets'));

// set view engine
app.set('view engine', 'ejs');

// main controller
calculator(app);

// run the server
app.listen(3000, '127.0.0.1', function(){
    console.log('website is running on port 3000');
});