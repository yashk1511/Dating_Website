const express = require('express');
const app = express();
const port = 8000;
const db = require('./config/mongoose');

// use express router
app.use('/', require('./routes'));

// set up the view engine
// app.set('view engine', 'ejs');
// app.set('views', require('./views'));

app.listen(port, function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
    }

    console.log(`Server is running on port ${port}`);

});