const mongoose = require('mongoose')
require('dotenv').config()
module.exports = ()=>{
    mongoose.connect(process.env.STRING_CONEXAO,{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

const db = mongoose.connection;
db.on('erro',error=>{console.error(error)})
db.once("open",()=>{console.log('conectado ao mongoDb com sucesso')});  
}

