const app =require('express').Router();
const auth = require('../middleware/auth');
const HomeControler = require('../controller/home.control')

app.get('/', auth,HomeControler.home);

app.post('/addNote',HomeControler.addNote);

app.post('/delete',HomeControler.deleteNote);

app.post('/editNote',HomeControler.editNote);

app.get('/logout',HomeControler.logout );



module.exports=app