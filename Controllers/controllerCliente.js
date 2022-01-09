const sequelize = require('../conexao')
const modelCliente = require('../Models/modelCliente')

exports.cadastrarCliente =async (req,res)=>{
    try {
        const  p = await sequelize.query(`SELECT email FROM clientes WHERE email = "${req.body.email}"`)
        const Email = req.body.email
        if(p[0][0].email === Email){
            return res.status(401).end()
        }
        
    } catch (error) {
        res.send('cadastrado com sucesso ')
        modelCliente.create({
            nome:req.body.nome,
            email:req.body.email,
            senha:req.body.senha
        })
    }
}

exports.exibirCliente =async (req,res)=>{
   const  p = await modelCliente.findAll()
   res.send(p)
}
exports.exibirClientePorEmail = async (req,res)=>{
    try {
        const  p = await sequelize.query(`SELECT id,email FROM clientes WHERE email = "${req.params.email}"`)
        res.send(p[0] )
    } catch (error) {
        res.send(error)
    }
}