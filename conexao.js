const Sequelize = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize(process.env.BANCO,  process.env.USUARIO,process.env.SENHA,{
    host:"sql10.freesqldatabase.com",
    dialect:'mysql'
  })
  sequelize.authenticate().then(function(){
      console.log('conectado com sucesso')
  }).catch(function(erro){
      console.log('falha ao se conectar : '+erro)
  })
module.exports = sequelize