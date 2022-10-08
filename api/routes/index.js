const bodyParser = require('body-parser');

const pessoas = require('./pessoasRoute.js')
const niveis = require('./niveisRoutes.js')
const turmas = require('./turmaRoutes.js')

module.exports = app => {
    app.use(
        bodyParser.json(),
        pessoas,
        niveis,
        turmas
    )
}


// module.exports = app => {
//     app.use(bodyParser.json())
//     app.use(pessoas)
//     app.get('/', (req, res) => res.send('Olá!'))
// }
