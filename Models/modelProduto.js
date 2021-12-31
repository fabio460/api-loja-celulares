const mongoose = require('mongoose');
const conexao = require('../conexao')
conexao()

const schema = mongoose.Schema({
    nome:String,
    preco:String,
    imagem:String,
    quantidade:String,
    descricao:String
})

const modelProduto = mongoose.model("celulare",schema)

module.exports = modelProduto