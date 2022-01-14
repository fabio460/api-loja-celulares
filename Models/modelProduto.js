const mongoose = require('mongoose');

    const schema = mongoose.Schema({
        nome:String,
        preco:String,
        imagem:String,
        quantidade:String,
        descricao:String
    })

const modelProduto = mongoose.model("celular",schema)

module.exports = modelProduto