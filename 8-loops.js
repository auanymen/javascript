console.log(` Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeDoComprador = 18;
const estaAcompanhada = false;
let temPassagemComprada = false;
const destino = "Rio de Janeiro";


console.log(`Destinos possíveis`);
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0
let destinoExiste = false;
while(contador<3){

    if(listaDeDestinos[contador] == destino){
        let destinoExiste = true;
        break;
    }else{ 
        console.log("Destino não existe");
    }
    contador += 1;
} 

console.log("Destino existe: ", destinoExiste);

if(podeComprar && destinoExiste){ 
    console.log("Boa Viagem");
}else{
    console.log("Desculpe tivemos um erro!");
}

for(let cont = 0 ; cont <3 ; cont++){
    if(listaDeDestinos[contador] == destino){
        destinoExiste = true;
        }
}
