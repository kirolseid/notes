const express = require('express')
const path = require('path')
const app = express()
const port = 3000
const mongoose = require('mongoose');
var session = require('express-session')
var flash = require('connect-flash');
var MongoDBStore = require('connect-mongodb-session')(session);

var store = new MongoDBStore({
    uri: 'mongodb://localhost:27017/NotesDB',
    collection: 'mySessions'
});

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    store
    
    }));

app.use(flash());



app.use(express.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,"/public")))
app.set('view engine', 'ejs');


app.use(require('./routes/index.routes'))
app.use(require('./routes/login.routes'))
app.use(require('./routes/register.routes'))

app.get('*', (req, res) => {
    res.send("404 page not found");
});



mongoose.connect('mongodb://localhost:27017/NotesDB', {useNewUrlParser: true, useUnifiedTopology: true});
app.listen(port, () => console.log(`server running...............................`))