const num1 = Number(prompt('Digite o primeiro número:'));
const num2 = Number(prompt('Dgite o segundo número:'));

function verificandoNumeros(){
    let primeiroNum = document.getElementById('primNum');
    let segundoNum = document.getElementById('segNum');

    const tipoNum1 = document.querySelector('p#tipoNum1');
    const tipoNum2 = document.querySelector('p#tipoNum2');

    primeiroNum.innerHTML += num1;
    segundoNum.innerHTML += num2;

    // Validando se os valores informados são números.
    if (Number.isNaN(num1) || Number.isNaN(num2)){
        alert('Por favor, digite somente números!');
    } else if(num1 == '' || num2 == '') {
        alert('[ERRO] Por favor, informe os números!');   
    } else {
        // Verificando o tipo do número 1.
        if (Number.isInteger(num1) == true) {
            tipoNum1.innerHTML += 'INTEIRO,';
        } else  {
            tipoNum1.innerHTML += 'REAL,';
        }

        // Verificando o tipo do número 2.
        if (Number.isInteger(num2) == true){
            tipoNum2.innerHTML += 'INTEIRO,';
        } else {
            tipoNum2.innerHTML += 'REAL,';
        }
    }

    // Verificando se o número é par ou ímpar.
    if (num1 % 2 == 0){
        tipoNum1.innerHTML += ' e é PAR!'
    } else {
        tipoNum1.innerHTML += ' e é IMPAR!'
    }

    if (num2 % 2 == 0){
        tipoNum2.innerHTML += ' e é PAR!'
    } else {
        tipoNum2.innerHTML += ' e é IMPAR!'
    }
}

function calculos() {
    let soma = document.getElementById('calcSoma');
    let subtra = document.getElementById('calcSubtra');
    let multi = document.getElementById('calcMulti');
    let divi = document.getElementById('calcDivi');
    let potencia = document.getElementById('calcPoten');

    soma.innerHTML += `O resultado entre ${num1} + ${num2} = ${num1 + num2}`
    subtra.innerHTML += `O resultado entre ${num1} - ${num2} = ${num1 - num2}`;
    multi.innerHTML += `O resultado entre ${num1} X ${num2} = ${num1 * num2}`;
    divi.innerHTML += `O resultado entre ${num1} ÷ ${num2} = ${num1 / num2}`;
    potencia.innerHTML += `A raiz quadrada de ${num1} = ${num1 ** 0.5} <br>`;
    potencia.innerHTML += `A raiz quadrada de ${num2} = ${num2 ** 0.5}`;
}

function numAleatorio(){
    let numRandom = Math.round(Math.random() * 100) + 1; // Irá randomizar um número de 1 a 100
    alert('O número aleatório escolhido foi ' + numRandom)
}