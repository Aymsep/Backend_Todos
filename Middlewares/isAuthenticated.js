const { verifyToken } = require("../Helpers/jwt")

exports.isAuthenticated= (req, res, next)=>{
    try{
        const token = req.cookies.tokenAuth || null
        if(!token){
            res.status(302).redirect('/user/login')
        }
        const verify = verifyToken(token)
        if(!verify){
            res.status(302).redirect('/user/login')
        }
        req.user = verify
        next()
    }catch(err){

    }

}