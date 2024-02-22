const { verifyToken } = require("../Helpers/jwt")

exports.avoidAuth=(req, res, next)=>{
   try{
      const token = req.cookies.tokenAuth || null
      if(!token){
         next()
      }
      const verify = verifyToken(token)
      if(!verify){
         next()
      }
      return res.status(302).redirect('/user/profile')
   }catch(err){
      
   }
}

