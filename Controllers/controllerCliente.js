
const modelCliente = require('../Models/modelCliente')

exports.cadastrarCliente =async (req,res)=>{
    
        const  e = await modelCliente.findOne({
            email:req.body.email
        })
        let mensagem = ''

        if(e === null){
            modelCliente.create({
                nome:req.body.nome,
                email:req.body.email,
                senha:req.body.senha
            })
            mensagem ='usuario cadastrado com sucesso'
        }else{
            mensagem='cliente ja existe na base de dados'
        }
        res.json(mensagem)
}

exports.exibirCliente =async (req,res)=>{
   const  p = await modelCliente.find()
   res.send(p)
}

exports.deletarCliente = async (req,res)=>{
   modelCliente.findByIdAndDelete(req.params.id,(err)=>{
       if(err){
           res.send('erro ao deletar: '+err)
       }else{
           res.send('usuario deletado ')
       }
   })
}
exports.exibirEmail = async (req,res)=>{
    const p =await modelCliente.findOne({
        email:req.params.email
    })
    res.send(p)
}