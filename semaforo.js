// Qual a função do express ?
// r: facilitar a criação de API's
//
// O que é API ?
// r: São interfaces de programação externas !
//
// Quais são os metodos do protocolo http ?
// r: GET, POST, PUT , DELETE
//    GET -> pega algo do servidor
//    POST -> envia algo para o servidor
//    PUT -> envia algo para o servidor alterar
//    DELETE -> envia algo para o servidor deletar
//

var express = require("express");   // chamei a biblioteca (modulo) express
var bodyParser = require("body-parser");

var app = express();   // criei uma instacia do express ( coloquei ele para trabalhar !!)

// configurando o body-parser para "parsear" o json enviado pelo cliente.
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


// API's
// RECEBE DADOS DO CLIENTE
app.post("/liga_led", (req, res, next)=>{
    var pino = req.body.pino;
    res.send(`Ligou o Led ${pino}`);
});

// RECEBE DADOS DO CLIENTE
app.post("/desliga_led", (req, res, next)=>{
    var pino = req.body.pino;
    res.send(`Desligou o Led ${pino}`);
});


// DEVOLVE DADOS NO SERVIDOR
app.get("/lista_tickets",(req, res, next)=>{
    let dados = [
        {"placa": "AAA0000", "peso": 32000},
        {"placa": "AAB9999", "peso": 36500},
        {"placa": "ABB2222", "peso": 23450}
    ];

    res.send(dados);
});


app.listen(3000, ()=>{
    console.log('Executando na porta 3000.');
});

