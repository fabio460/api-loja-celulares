const Sequelize = require('sequelize');
require('dotenv').config()
const sequelize = new Sequelize("sql10462048", "sql10462048","cyPQwhSSVK",{
    host:"sql10.freesqldatabase.com",
    dialect:'mysql'
  })
  sequelize.authenticate().then(function(){
      console.log('conectado com sucesso')
  }).catch(function(erro){
      console.log('falha ao se conectar: '+erro)
  })
module.exports = sequelize