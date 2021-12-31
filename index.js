const express = require('express')
const app = express()
//const rota = require('./rotas')
const PORT = process.env.PORT || 4000
//app.use(rota)
app.get('/',(req,res)=>{
    res.send('teste')
})
app.use(express.static('imagens'))
app.listen(PORT)