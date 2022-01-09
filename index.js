const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const rota = require('./rotas')
const PORT = process.env.PORT || 4000
app.use(rota)


app.use(express.static('imagens'))
app.listen(PORT)