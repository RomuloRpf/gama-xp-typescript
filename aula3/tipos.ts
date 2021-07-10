//Os tipos saõ escritos com letra minúscula e as Interfaces com a primeira letra maiúscula 
//Boolean
const contaPaga: boolean = false;

//Number
const idade: number = 23;
const avaliacao: number = 4.5;

//String
const nome: string = 'Pedro';

//Array
const idades: number[] = [23,28,45];
const idades2: Array<number> = [23,28,45,90,98]; //Passando pra Interface Array o tipo que ela vai ter dentro idades2

// Tuple
let jogadores: [string, number, boolean];
jogadores = ['A',2, true];

//Enum - bom para mapear informações
enum StatusAprovacao {
    Aprovado = '001',
    Pendente = '002',
    Rejeitado = '003'
}
const statusDaAprovacao: StatusAprovacao = StatusAprovacao.Aprovado;
//Se não fossem definidos os valores no enum Aprovado receberia o valor 1 e o outros 0

//Any - deve ser usado com cautela
const retornoDaAPI: any[] = [123, 'Fulano',false];
const retornoDaAPI2: any = {
    // .....
};


//Void
function printarNaTela (msg: string): void{
    console.log(msg);
};

//Null e Undefined
const u: undefined = undefined;
const n: null = null;

//Object - não é um tipo primitivo
function criar(objeto: object){
    // ...
};
criar({
    propriedade: 1
});
//criar('Nome') //Dá erro

//Tipo Never - nunca vão ser encerrados
function loopInfinito(): never{
    while (true) {}
}

function erro(mensagem: string): never{
    throw new Error(mensagem);
}

// No caso abaixo o typescript enetnde a função como tipo never por inferência
function falha() {
    return erro('Algo falhou');
}

//Union types
const nota: string | number = 5;
function exibirNota(nota: number | string) {
    console.log(`A nota é ${nota}`);
}

exibirNota('10');
exibirNota(10);

// Alias
type Funcionario = {
    nome: string;
    sobrenome: string;
    dataNascimento: Date;
}

//type Funcionarios = Array<Funcionario>;
const funcionarios: Funcionario[] = [{
    nome: 'Fulano',
    sobrenome: 'De tal',
    dataNascimento: new Date()
},
{
    nome: 'Ciclano',
    sobrenome: 'Silva',
    dataNascimento: new Date()
}];

function tratarFuncionarios(funcionarios: Funcionario[]){
    for(let funcionario of funcionarios){
        console.log('Nome do funcionário: ', funcionario.nome);
    }
}

//Null ou opcionais
let altura: number | null = 1.6;
altura = null;

type Contato = {
    nome: string;
    telefone1: string;
    telefone2?: string;
}

const contato: Contato = {
    nome: 'Fulano',
    telefone1: '231561154',
}

//Type Assertion
const minhaIdade: any = 23;
(minhaIdade as number).toString();
//(<number>minhaIdade).toString();


//const input = <HTMLInputElement>document.getElementById("numero1");
const input = document.getElementById("numero1") as HTMLInputElement;
console.log(input.value);