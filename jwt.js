const jwt = require('jsonwebtoken')
function verificaJWT(req,res,next){
    const token = req.headers['x-access-token'];
    const blackList = [];
    blackList.findIndex((elem)=>{	
      if(token===elem){
         res.status(401).end()
      }
    });


    jwt.verify(token, 'my-secret-key ',(err,decoded)=>{
      if (err) return res.status(401).end();
      req.id = decoded.id;
      next();
    })
} 

module.exports = verificaJWT