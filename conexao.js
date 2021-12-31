require('dotenv').config()
module.exports = ()=>{
    
    const mongoose = require('mongoose')
    mongoose.connect(process.env.CREDENCIAIS,{
        useNewUrlParser:true
    })
    const db = mongoose.connection
    db.on("erro",error=>console.error(error))
    db.once("open",()=>console.log('conectado ao mongoDb'))
}