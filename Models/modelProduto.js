const Sequelize = require('sequelize');
const sequelize = require('../conexao')


const modelProduto = sequelize.define("celular",{
    nome:{type:Sequelize.STRING},
    preco:{type:Sequelize.FLOAT},
    imagem:{type:Sequelize.STRING},
    quantidade:{type:Sequelize.INTEGER},
    descricao:{type:Sequelize.STRING}
})

//modelProduto.sync({froce:true})

module.exports = modelProduto