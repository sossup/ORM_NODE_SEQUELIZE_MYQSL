const database = require('../models')

class PessoaController {
    //static serve para nao ter que criar um New PessoaController antes de chamar-
    static async pegaTodasPessoas(req, res){
        try{
        const todasPessoas = await database.Pessoas.findAll()
        return res.status(200).json(todasPessoas)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async pegaPessoa(req, res){
        const {id} = req.params
        try{
            const umaPessoa = await database.Pessoas.findOne({ where: { id: Number(id)}})
            return res.status(200).json(umaPessoa)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async criaPessoa (req, res){
        const novaaPessoa = req.body
        try{
            const novaPessoa = await database.Pessoas.create(novaaPessoa)
            return res.status(200).json(novaPessoa)
        }catch(error){
            return res.status(500).json(error.message)
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
            return res.status(500).json(error.message)
        }
    }

    static async deletePessoa (req, res){
        const {id} = req.params
        try{
            const deletaPessoa = await database.Pessoas.destroy({ where: {id: Number(id)}})
            return res.status(200).json({mensagem: `id ${id} deletado`} )
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    //-------------------------------------------------------------------------------------//
    //                                   Matriculas                                        //
    //-------------------------------------------------------------------------------------//

    static async pegaUmaMatricula(req, res){
        const {estudanteId, matriculaId} = req.params
        try{
            const umaMatricula = await database.Matriculas.findOne({where: {id: Number(matriculaId), estudante_id: Number(estudanteId)}})
            return res.status(200).json(umaMatricula)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async criaMatricula(req, res){
        const {estudanteId} = req.params
        const novaMatricula = { ...req.body, estudante_id: Number(estudanteId)}
        try{
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async atualizaMatricula(req, res){
        const {estudanteId , matriculaId} = req.params
        const novasInfos = req.body
        try{
            await database.Matriculas.update(novasInfos, {where: {id: Number(matriculaId), estudante_id: Number(estudanteId)}})
            const matriculaAtualizada = await database.Matriculas.findOne({where: {id: Number(matriculaId)}})
            return res.status(200).json(matriculaAtualizada)
        }catch(error){
            return res.status(500).json(error.message)
        }
    }

    static async apagaMatricula(req, res){
        const {estudanteId, matriculaId} = req.params
        try{
            await database.Matriculas.destroy({where: {id: Number(matriculaId)}})
            return res.status(200).json({mensagem: `id ${matriculaId} deletado`})

        }catch(error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = PessoaController