console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeDoComprador = 17;
const estaAcompanhada = true;


console.log(`Destinos possíveis`);
console.log(listaDeDestinos);

if (idadeComprador >= 18 || estaAcompanhada == true) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1); //removendo item
} else {
    //a pessoa é menor de idade
    if (estaAcompanhada == true) {
        console.log("Comprador está acompanhado");
        listaDeDestinos.splice(1, 1); //removendo item
    } else {
        console.log("Não é maior de Idade e não posso vender");
    }
}

console.log("Embarque: \n\n")
if(idadeComprador >= 18 && temPassagemComprada)
    console.log("Boa viagem");
else{
    console.log("Você não pode embarcar");
} 

console.log(listaDeDestinos);

console.log(idadeComprador > 18)
console.log(idadeComprador < 18)
console.log(idadeComprador <= 18)
console.log(idadeComprador >= 18)
console.log(idadeComprador == 18)