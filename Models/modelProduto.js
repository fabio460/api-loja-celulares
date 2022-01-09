const Sequelize = require('sequelize');
const sequelize = require('../conexao')


const modelProduto = sequelize.define("produto",{
    nome:{type:Sequelize.STRING},
    preco:{type:Sequelize.STRING},
    imagem:{type:Sequelize.STRING},
    quantidade:{type:Sequelize.INTEGER},
    descricao:{type:Sequelize.STRING}
})

// modelProduto.sync({force:true})

module.exports = modelProduto