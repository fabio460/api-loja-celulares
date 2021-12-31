const modelProduto = require('../Models/modelProduto')

exports.postar = (req,res)=>{
   try {
    modelProduto.create({
        nome:req.body.nome,
        preco:req.body.preco,
        imagem:req.body.imagem,
        quantidade:req.body.quantidade,
        descricao:req.body.descricao
    })
    res.send('produto inserido com sucesso')
   } catch (error) {
       res.send('falha ao inserir o produto: '+error)
   }
}

exports.listar =async (req,res)=>{
   const p =await modelProduto.findAll()
   res.send(p)
}
exports.deletar = (req,res)=>{
    try {
        modelProduto.destroy({
            where:{id:req.body.id}
        })
        res.send('produto deletado')
    } catch (error) {
        res.send('erro:'+error)
    }
}