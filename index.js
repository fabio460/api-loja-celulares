const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
app.use(express.json())
const rota = require('./rotas')
const { json } = require('express')
const PORT = process.env.PORT || 4000
app.use(rota)


app.use(express.static('imagens'))
app.listen(PORT)