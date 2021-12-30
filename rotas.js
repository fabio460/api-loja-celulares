const rota = require('express').Router()
const controllerProduto = require('./Controllers/controllerProduto')
const multerConfig = require('./multerConfig')
const multer = require('multer')
rota.get('/',controllerProduto.listar)
rota.post('/',multer(multerConfig).single('imagem'),controllerProduto.postar)

module.exports = rota