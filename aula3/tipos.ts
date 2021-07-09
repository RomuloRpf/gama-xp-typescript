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