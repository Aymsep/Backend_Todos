const { axiosRegisterUser } = require("../Api/User.Api");
const { uuid } = require('uuidv4'); 
const bcrypt = require('bcrypt');
const {comparePassword,hashPassword} = require('../Helpers/Hashing'); 
const {findUser,MatchedPassword} = require('../Helpers/userQuery')
const {generateToken} = require('../Helpers/jwt')


//rendering pages
exports.renderLogin = (req, res) =>{
    res.render('login');
}

exports.renderRegister = (req, res) =>{
    res.render('register');
}

exports.renderProfile = (req, res) =>{
    res.render('profile');
}


//logic


exports.registerUser =async (req, res) =>{
    try{
        const {username,email,password} = req.body;
        const hashedPassword = await hashPassword(password);
        const result  = await axiosRegisterUser({username,email,password:hashedPassword,authorId:uuid()});
        if(!result) return res.status(400).json({message:"Something went wrong"})
        res.status(302).redirect('/user/login')

    }catch(err){
       res.status(500).json({message:err.message})
    }

}


exports.loginUser =async (req, res) =>{
    try{
        const {email,password} = req.body;

        const user = await findUser(email)
        console.log('before',user)
        if(!user) return res.status(400).json({message:"User not found"})
        const checked =await  MatchedPassword(password,user.password)
        if(!checked) return res.status(400).json({message:"Incorrect Password"})
        delete user.password
        delete user.id
        const token = await generateToken(user)
        res.cookie('tokenAuth',token)    
        res.status(302).redirect('/user/profile')    

    }catch(err){

    }
}