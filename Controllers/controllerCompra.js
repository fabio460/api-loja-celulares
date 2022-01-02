const sequelize = require('../conexao')
const modelCompra = require('../Models/modelCompra')
const modelProduto = require('../Models/modelProduto')
const enviarEmail = require('../nodemailer')

exports.comprar =async (req,res)=>{
   try {

    // pegar a quantidade do produto
    var prod = await sequelize.query(`SELECT * FROM produtos WHERE id = ${req.body.id_produto}`)
    const {quantidade,nome:nomeProduto } =prod[0][0]

    const c =await sequelize.query(`select * from clientes where id = ${req.body.id_cliente}`)
    const {id,nome,email} = c[0][0]

    if(id !== req.body.id){
        console.log("cliente inexiste")
    }
        if(quantidade >= req.body.quantidadeCompra){
            modelProduto.update({
                quantidade:quantidade-req.body.quantidadeCompra
             },{
                 where:{id:req.body.id_produto}
             })
     
             modelCompra.create({
                     id_produto:req.body.id_produto,
                     id_cliente:req.body.id_cliente,
                     data:req.body.data,
                     hora:req.body.hora,
                     quantidadeCompra:req.body.quantidadeCompra
             })

          
             const emailDaEmpresa = "fabio.alternativo.silva@gmail.com"
             const emailDoCliente = email
             const informacoes = `Parabéns senhor(a) ${nome}, sua compra do produto ${nomeProduto} foi realizada com sucesso `
             const assuntoDoEmail = `compra do ${nomeProduto}`
             const nomeDaEmpresa = `loja eletrons`


             enviarEmail(emailDaEmpresa,emailDoCliente,informacoes,assuntoDoEmail,nomeDaEmpresa)
             res.send('compra efetuada com sucesso')
         }else{
             res.send(`quantidade insuficiente, atualmente existe ${quantidade} produtos no estoque`)
         }
    
   } catch (error) {
       res.send('produto ou produto não existem na base de dados')
   }
}


exports.exibirCompras =async (req,res)=>{
    const p = await modelCompra.findAll()
    const m =await sequelize.query("select * from produtos")
    res.send(p)
}
