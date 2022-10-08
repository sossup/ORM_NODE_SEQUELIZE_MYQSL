const express = require("express");
const routes = require("./routes")
// const bodyParser = require("body-parser");

const app = express()

//avisa o express que o bodyParser vai ajudar no meio de campo entre o express e o json
// app.use(bodyParser.json())

const port = 3000

routes(app)

// app.get('/teste', (req, res) => res
//     .status(200)
//     .send({mensagem: 'boas-vindas á API'
// }))

//listen fica escutando a porta
app.listen(port, () => console.log(`servidor esta escutando na porta ${port}`))

module.exports = app