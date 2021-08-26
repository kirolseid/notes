const noteModel=require('../models/notes.model')


module.exports.home=async(req, res) => {
    const data =await noteModel.find({userId:req.session.userId})
    res.render('index',{islogin:true,data})
}

module.exports.addNote =async (req, res) => {
    // console.log(req.body);
    const {title,desc}=req.body
    await noteModel.insertMany({userId:req.session.userId,title,desc})
    res.redirect('/')
}

module.exports.deleteNote = async (req, res) => {
    await noteModel.deleteOne({_id:req.body.id})
    res.redirect('/')   
}


module.exports.editNote = async (req, res) => {
    const {id,title,desc} =req.body
    // console.log({id,title,desc});
    await noteModel.updateOne({_id:id},{title:title,desc:desc})
    res.redirect('/')
}


module.exports.logout =(req, res) => {
    req.session.destroy()
    res.redirect('/login')   
}