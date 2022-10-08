const { Router } = require('express')
const PessoaController = require('../controllers/PessoaController.js')

const router = Router()

router.get('/pessoas', PessoaController.pegaTodasPessoas)

router.get('/pessoas/:id', PessoaController.pegaPessoa)

router.post('/pessoas', PessoaController.criaPessoa)

router.put('/pessoas/:id', PessoaController.atualizaPessoa)

router.delete('/pessoas/:id', PessoaController.deletePessoa)
module.exports = router