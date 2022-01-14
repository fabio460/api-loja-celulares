
const mongoose = require('mongoose');


const schema = mongoose.Schema({
    id_produto:String,
    id_cliente:String,
    data:String,
    hora:String,
    quantidadeCompra:String 
})
const modelCompra = mongoose.model('compra',schema)



module.exports = modelCompra