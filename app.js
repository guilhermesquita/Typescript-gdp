"use strict";
const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'dev'
};
pessoa.idade = 29;
const andre = {
    nome: 'Andre',
    idade: 20,
    profissao: 'pintor'
};
const paula = {
    nome: 'Paula',
    idade: 20,
    profissao: 'Faxineira'
};
var Profissao;
(function (Profissao) {
    Profissao[Profissao["Professora"] = 0] = "Professora";
    Profissao[Profissao["Atriz"] = 1] = "Atriz";
    Profissao[Profissao["Faxineira"] = 2] = "Faxineira";
    Profissao[Profissao["Dev"] = 3] = "Dev";
})(Profissao || (Profissao = {}));
const Vanessa = {
    nome: "Vanessa",
    idade: 20,
    profissao: Profissao.Atriz
};
