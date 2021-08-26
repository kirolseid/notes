const {validationResult}=require('express-validator');
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');


module.exports.register=(req, res) => {    
    // console.log(req.flash('emailMass'));
    res.render('register',{errors:req.flash("errors"),oldinputs:req.flash('oldinput')[0],mass:req.flash('emailMass'),islogin:false})
}


module.exports.handleSignUp=async(req, res) => {
    // console.log(req.body);
    const {name,email,password,confirmPassword}=req.body
    const errValid=validationResult(req)
    // console.log(errValid.isEmpty());
    // console.log(errValid.array());


    if (errValid.isEmpty()) {
        const data = await userModel.findOne({email})
        if (!data) {
            bcrypt.hash(password, 7,async function(err, hash) {
                // Store hash in your password DB
                await userModel.insertMany({name,email,password:hash})
                res.redirect('/login')
            }); 
        }else{
            req.flash('oldinput',{name,email,password,confirmPassword})
            req.flash('emailMass','Email is exsit')
            // console.log("email8lt");
            res.redirect('/register')

        }
        
        
    }else{
        req.flash('oldinput',{name,email,password,confirmPassword})
        req.flash("errors",errValid.array())
        res.redirect('/register')
        
    }

}