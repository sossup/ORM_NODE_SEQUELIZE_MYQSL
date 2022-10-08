const database = require('../models')

class PessoaController {
    //static serve para nao ter que criar um New PessoaController antes de chamar-
    static async pegaTodasPessoas(req, res){
        try{
        const todasPessoas = await database.Pessoas.findAll()
        return res.status(200).json(todasPessoas)
        }catch (error){
            return res.status(500).json(error.menssage)
        }
    }

    static async pegaPessoa(req, res){
        const {id} = req.params
        try{
            const umaPessoa = await database.Pessoas.findOne({ where: { id: Number(id)}})
            return res.status(200).json(umaPessoa)
        }catch(error){
            return res.status(500).json(error.menssage)
        }
    }

    static async criaPessoa (req, res){
        const novaaPessoa = req.body
        try{
            const novaPessoa = await database.Pessoas.create(novaaPessoa)
            return res.status(200).json(novaPessoa)
        }catch(error){
            return res.status(500).json(error.menssage)
        }
    }

    static async atualizaPessoa (req, res){
        const novasInfos = req.body
        const {id} = req.params
        try{
            await database.Pessoas.update(novasInfos, {
                where:{
                    id: Number(id)
                }
            })
            const pessoaAtualizada = await database.Pessoa.findOne({whare: {id: Number(id)}})
            return res.status(200).json(pessoaAtualizada)
        }catch(error){
            return res.status(500).json(error.menssage)
        }
    }

    static async deletePessoa (req, res){
        const {id} = req.params
        try{
            const deletaPessoa = await database.Pessoas.destroy({ where: {id: Number(id)}})
            return res.status(200).json({mensagem: `id ${id} deletado`} )
        }catch(error){
            return res.status(500).json(error.menssage)
        }
    }
}

module.exports = PessoaController