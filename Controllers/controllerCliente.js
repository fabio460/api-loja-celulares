const modelCliente = require('../Models/modelCliente')

exports.cadastrarCliente = (req,res)=>{
    try {
        modelCliente.create({
            nome:req.body.nome,
            email:req.body.email,
            senha:req.body.senha
        })
        res.send('cliente cadastrado com sucesso')
    } catch (error) {
        res.send('falha no cadastro: '+ error)
    }
}

exports.exibirCliente =async (req,res)=>{
   const  p = await modelCliente.findAll()
   res.send(p)
}