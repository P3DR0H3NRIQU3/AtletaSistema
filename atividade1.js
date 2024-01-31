//Questão 1
let promocao = true;
 
//Questão 3
promocao = false;

//Questão 2
if(promocao){
    console.log("Hora de Comprar")
}
//Questão 4
else{
    console.log("Hora de esperar a promoção")
}
// Questão 5
let nivelFome = 7;

// Questão 6
if (nivelFome > 7) {
    console.log('Hora de comer!');
} 

else {
    console.log('Podemos comer mais tarde!');
}

// Questão 7
let humor = 'sonolento';
let nivelCansaco = 6;

// Questão 8
if (humor === 'sonolento' && nivelCansaco > 8) {
    console.log('Hora de dormir');
} else {
    
   
console.log('Ainda não é hora de dormir');
}

// Questão 9
let estacao = 'outono';

if (estacao === 'inverno') {
    console.log('É inverno! Tudo está coberto de neve.');
} else if (estacao === 'outono') {
    console.log('É outono! As folhas estão caindo!');
} else if (estacao === 'verão') {
    console.log('É ensolarado e quente porque é verão!');
} else {
    console.log('Estação desconhecida.');
}

// Questão 11
let posicaoFinalAtleta = 'primeiro lugar';

switch (posicaoFinalAtleta) {
    case 'primeiro lugar':
        console.log('Você ganha a medalha de ouro!');
        break;
    case 'segundo lugar':
        console.log('Você ganha a medalha de prata!');
        break;
    case 'terceiro lugar':
        console.log('Você ganha a medalha de bronze!');
        break;
    
   
default:
        
       
console.log('Nenhuma medalha concedida.');
        break;
}