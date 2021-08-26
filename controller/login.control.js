const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');
const {validationResult}=require('express-validator');


module.exports.login= (req, res) => {
    if (req.session.userId) {
        res.redirect('/')
    }else{
        res.render('login',{passMass:req.flash('passMass'),oldinput:req.flash('oldinput')[0],emailMass:req.flash('emailMass'),islogin:false})
    }
}


module.exports.handleSignin=async (req, res) => {
    const {email,password}=req.body
    const errValid=validationResult(req)
        if (errValid.isEmpty()) {
            const data =await userModel.findOne({email})
            if (data) {
                const match = await bcrypt.compare(password, data.password);
                if(match) {
                    req.session.userId=data._id
                    res.redirect('/')
                }else{
                    req.flash('passMass','password incorrect')
                    req.flash('oldinput',email)
                    res.redirect('/login')
        
                }
                
            }else{
                req.flash('emailMass','email incorrect')
                res.redirect('/login')
            }
            
        }else{
            res.redirect('/login')
            console.log(errValid.array());
        }
    
}