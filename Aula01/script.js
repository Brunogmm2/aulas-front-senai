/*const nome = "Bruno";
const idade = 12;
const teste = true;
const produto = {produto: "mouse", quantidade:"45"};
const somar = () => 3 + 3;

console.log ( typeof ( nome ) );
console.log ( typeof ( idade ) );
console.log ( typeof ( teste ) );
console.log ( typeof ( produto ) );
console.log ( typeof ( somar ) );

const cidade = "São Roque";
const estado = "São Paulo";
const pais = `BR`;

console.log ("Minha cidade é: ", cidade);
console.log ("Meu estado é: ", estado);
console.log ("Meu país é: ", pais);

let nota1 = 8;
let nota2 = 8;

console.log ( nota1++ );
console.log ( nota1 );
console.log ( ++nota2);*/

//const $nome = document.getElementById ('nome');


const $calcular = document.getElementById('calcular');

function calcularMedia() {
    const $nome = document.getElementById('nome');
    const $nota1 = document.getElementById('nota1');
    const $nota2 = document.getElementById('nota2');
    const $media = document.getElementById('media');
    const $situacao = document.getElementById ('situacao');

    const media = (parseInt($nota1.value) + parseInt($nota2.value)) /2;

    if (media >= 5) {
        $situacao.value = "Aprovado";
        $situacao.style.color = "green";
    }else{
        $situacao.value = "Reprovado";
        $situacao.style.color = "red";
        $situacao.style.backgroundColor = "black";
    }
    $media.value = media;
}

$calcular.addEventListener('click',calcularMedia)