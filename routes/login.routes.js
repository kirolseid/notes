const app =require('express').Router()
const validation =require('../validation/login.valid')
const loginControler =require('../controller/login.control')


app.get('/login',loginControler.login);

app.post('/handleSignin',validation,loginControler.handleSignin);

module.exports=app