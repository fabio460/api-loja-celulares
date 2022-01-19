
const modelCliente = require('../Models/modelCliente')
const modelCompra = require('../Models/modelCompra')
const modelProduto = require('../Models/modelProduto')
const enviarEmail = require('../nodemailer')

exports.comprar =async (req,res)=>{
    let mensagem = ''
    let quantidadeSolicitada = parseInt(req.body.quantidadeCompra)
    try {
        var Produto = await modelProduto.findOne({
            _id:req.body.id_produto
        })
        const cliente =await modelCliente.findOne({
            _id:req.body.id_cliente
        })

        const {quantidade,_id:idProduto,nome:nomeProduto} = Produto
        const {nome,email} = cliente
        if(quantidade >= quantidadeSolicitada){

            modelCompra.create({
                    id_produto:req.body.id_produto,
                    id_cliente:req.body.id_cliente,
                    data:req.body.data,
                    hora:req.body.hora,
                    quantidadeCompra:req.body.quantidadeCompra
            })
            let quantidadeAtualizada = (quantidade-req.body.quantidadeCompra).toString()
            modelProduto.findByIdAndUpdate(idProduto,{
                quantidade:quantidadeAtualizada
            },()=>{
                //
            })
            const emailDaEmpresa = "fabio.alternativo.silva@gmail.com"
            const emailDoCliente = email
            const informacoes = `Parabéns senhor(a) ${nome}, sua compra do produto ${nomeProduto} foi realizada com sucesso `
            const assuntoDoEmail = `compra do ${nomeProduto}`
            const nomeDaEmpresa = `loja eletrons`

            enviarEmail(emailDaEmpresa,emailDoCliente,informacoes,assuntoDoEmail,nomeDaEmpresa)
            mensagem = `compra efetuada com sucesso de ${req.body.quantidadeCompra} ${nomeProduto} produto(s)`
         }else{
             mensagem = `quantidade insuficiente,usuario solicitou ${req.body.quantidadeCompra} e atualmente existe ${quantidade} produtos no estoque`
         }
         
    } catch (error) {
        mensagem = error
    }
    console.log(mensagem)
    res.json(mensagem)
}


exports.exibirCompras =async (req,res)=>{
    const p = await modelCompra.find()
    res.send(p)
}
