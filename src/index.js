const express = require('express');
const app = express();
const path = require('path');


//Settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'pug');

//Middlewares


//Public folder

app.use(express.static(path.join(__dirname, '../public')));
//Routes
app.use(require('../routes/frontpage.js'));

//Starting server
app.listen(app.get('port'), () => {
    console.log("Server on port ", app.get('port'));
});