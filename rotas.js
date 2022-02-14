
const conexao = require('./conexao')
conexao()



const rota = require('express').Router()
const controllerProduto = require('./Controllers/controllerProduto')
const controllerCompra = require('./Controllers/controllerCompra')
const controllerCliente = require('./Controllers/controllerCliente')
const multerConfig = require('./multerConfig')
const multer = require('multer')
const verificaJWT = require('./jwt')


//efetuar compra
rota.post('/compra',multer(multerConfig).single(),controllerCompra.comprar)
rota.get('/compra',controllerCompra.exibirCompras)

//cadastrar cliente
rota.post('/cliente',multer(multerConfig).single(),controllerCliente.cadastrarCliente)
rota.get('/cliente',controllerCliente.exibirCliente)
rota.delete('/cliente/:id',controllerCliente.deletarCliente)
rota.get('/cliente/:email',controllerCliente.exibirEmail)
rota.post('/jwt',multer(multerConfig).single(),controllerCliente.autenticarCliente)
//produtos
rota.get('/',controllerProduto.listar)
rota.post('/',multer(multerConfig).single('imagem'),controllerProduto.postar)
rota.get('/:nome',controllerProduto.listarPorNome)
rota.delete('/:id',controllerProduto.deletar)

rota.post('/',controllerCompra.comprar)

module.exports = rota