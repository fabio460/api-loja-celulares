const Sequelize = require('sequelize')
const sequelize = require('../conexao')

const modelCliente = sequelize.define('cliente',{
    nome:{type:Sequelize.STRING},
    email:{type:Sequelize.STRING},
    senha:{type:Sequelize.STRING}
})

//modelCliente.sync({froce:true})

module.exports = modelCliente