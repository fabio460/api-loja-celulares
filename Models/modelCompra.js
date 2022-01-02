const Sequelize = require('sequelize');
const sequelize = require('../conexao');
const modelProduto = require('./modelProduto');


const modelCompra = sequelize.define("celular",{
    id_produto:{type:Sequelize.INTEGER},
    id_cliente:{type:Sequelize.INTEGER},
    data:{type:Sequelize.STRING},
    hora:{type:Sequelize.STRING},
    quantidadeCompra:{type:Sequelize.INTEGER}
})

//modelCompra.sync({force:true})

module.exports = modelCompra