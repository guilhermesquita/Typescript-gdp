const pessoa = {
    nome: 'Mariana',
    idade: 28,
    profissao: 'dev'
}

pessoa.idade = 29;

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 20,
    profissao: 'pintor'
}

const paula: {nome: string, idade: number, profissao: string} = {
    nome: 'Paula',
    idade: 20,
    profissao: 'Faxineira'
}

enum Profissao{
    Professora, 
    Atriz,
    Faxineira,
    Dev
}

interface Pessoa{
    nome: string,
    idade: number;
    profissao: Profissao
}

const Vanessa:Pessoa = {
    nome: "Vanessa",
    idade: 20,
    profissao: Profissao.Atriz
}

interface Estudante extends Pessoa {
    materias: string[]
}