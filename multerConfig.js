const multer = require('multer')
const path = require('path')
const crypto = require('crypto')
module.exports = {
    storage:multer.diskStorage({
        destination:(req,file,cb)=>{
           cb(null,path.resolve(__dirname,'imagens'))
        },
        filename:(req,file,cb)=>{
            crypto.randomBytes(16,(err,hash)=>{
                if(err)cb(err)
                const Filename = `${hash.toString('hex')}-${file.originalname}`
                cb(null,Filename)
            })
        }
    })
}