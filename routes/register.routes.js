const app =require('express').Router()
const validation =require('../validation/resgiser.validation')
const registerController=require('../controller/regiser.control')

app.get('/register',registerController.register );

app.post('/handleSignUp',validation,registerController.handleSignUp);


module.exports=app