const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController.js')

const router = Router()

router
    .get('/pessoas', PessoaController.pegaTodasPessoas)
    .get('/pessoas/:id', PessoaController.pegaPessoa)
    .post('/pessoas', PessoaController.criaPessoa)
    .put('/pessoas/:id', PessoaController.atualizaPessoa)
    .delete('/pessoas/:id', PessoaController.deletePessoa)
    .get('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.pegaUmaMatricula)
    .post('/pessoas/:estudanteId/matricula', PessoaController.criaMatricula)
    .put('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.atualizaMatricula)
    .delete('/pessoas/:estudanteId/matricula/:matriculaId', PessoaController.apagaMatricula)

module.exports = router