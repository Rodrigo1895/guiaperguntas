const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/:nome/:lang", (req, res) => {
    var nome = req.params.nome;
    var lang = req.params.lang;
    var exibirMsg = false;

    var produtos = [
        {nome: "Doritos", preco: 3.14},
        {nome: "Coca-Cola", preco: 5},
        {nome: "Leite", preco: 1.45},
        {nome: "Carne", preco: 15},
        {nome: "Redbull", preco: 6},
        {nome: "Nescau", preco: 4}
    ]

    res.render("index", {
        nome: nome,
        lang: lang,
        empresa: "Guia do Programador",
        inscritos: 8000,
        msg: exibirMsg,
        produtos: produtos
    });
});

app.listen(8080, ()=> {
    console.log("App rodando");
});