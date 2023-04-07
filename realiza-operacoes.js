'use strict';

const numeros = document.querySelectorAll('[class*=num]');
const display =  document.querySelector('.div-resultado');
const operadores = document.querySelectorAll("[class*=op]");

let novoNumero = true;
let operador;
let numeroAnterior;
let numeroAtual;

const operacaoPendente = () =>{
    if(operador != undefined){
        return true;
    }
}

const calcular = () =>{
    if(operacaoPendente()){
        numeroAtual = parseFloat(display.textContent.replace(',','.'));
        novoNumero = true;
        if(operador == "+"){
            atualizarDisplay(soma(numeroAnterior,numeroAtual));
        }else if(operador == "-"){
            atualizarDisplay(subtrai(numeroAnterior,numeroAtual));
        }else if(operador == "*"){
            atualizarDisplay(multiplica(numeroAnterior,numeroAtual));
            console.log(numeroAnterior + " - "+ numeroAtual);
        }else if(operador == "/"){
            atualizarDisplay(divide(numeroAnterior,numeroAtual));
        }
    }
}
function soma(num1,num2){
	return parseFloat(num1) + parseFloat(num2);	
}
function subtrai(num1,num2){
	return parseFloat(num1)-parseFloat(num2);
}
function multiplica(num1,num2){
	return parseFloat(num1)*parseFloat(num2);
}	
function divide(num1,num2){
	return parseFloat(num1)/parseFloat(num2);
}

const atualizarDisplay = (texto) =>{
    if(novoNumero){
        display.textContent = texto;
        novoNumero=false;
    }else{
        display.textContent += texto;
    }
}

const selecionarOperador = (evento) =>{
    if(!novoNumero){
        console.log("Aqui número novo " + novoNumero);
        operador = evento.target.textContent;
        console.log(operador);
        novoNumero = true;
        numeroAnterior = parseFloat(display.textContent.replace(',','.')); 
        console.log(numeroAnterior);      
    }
}
//limpa o display por meio do click do botão CE
const limpaDisplay = () =>{
    display.textContent = '';
}
document.querySelector(".limparDisplay").addEventListener("click", limpaDisplay);

//converte valor atual em fração
const converteFracao = (valor)=>{
    return parseFloat(valor/100);
}
//atualiza o valor do numeroAtual com o valor convertido
const percentual = ()=> {
    numeroAtual = parseFloat(display.textContent.replace(',','.'));
    numeroAtual = converteFracao(numeroAtual);
    novoNumero=true;
    if(operador == "+"){
        numeroAtual = multiplica(numeroAnterior,numeroAtual);
        novoNumero=true;
    }
    if(operador == "-"){
        numeroAtual = multiplica(numeroAnterior,numeroAtual);
        novoNumero=true;
    }
}
//chama a função para converter o numeroAtual em fração
document.querySelector('.opPercentual').addEventListener('click', percentual);

//limpar calculo
const limparCalculo = () =>{
    limpaDisplay();
    operador = undefined;
    novoNumero = true;
    numeroAnterior = undefined;
}
document.querySelector('.limparCalculo').addEventListener('click', limparCalculo);

//trata a o evento de clique no botão "="
const ativarIgual = () =>{
    calcular();
    operador = undefined;
}

document.querySelector('.igual').addEventListener('click', ativarIgual);

const removerUltimoNumero=()=>display.textContent = display.textContent.slice(0,-1);
document.querySelector('.backSpace').addEventListener('click',removerUltimoNumero);

const existeDecimal = () => display.textContent.indexOf(',') != -1;
const existeValor = () => display.textContent.length > 0;

const inserirDecimal = () =>{
    if(!existeDecimal()){
        if(existeValor()){
            atualizarDisplay(",");
        }else{
            atualizarDisplay("0,");
        }
    }
}
document.querySelector('.decimal').addEventListener('click',inserirDecimal);

//atualiza o display de acordo com o evento selecionado de numero e operador
const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);

numeros.forEach(numero => numero.addEventListener('click',inserirNumero));

operadores.forEach(operador => operador.addEventListener('click',selecionarOperador));

const mapaTeclado = {
    '0' : 'tecla0',
    '1' : 'tecla1',
    '2' : 'tecla2',
    '3' : 'tecla3',
    '4' : 'tecla4',
    '5' : 'tecla5',
    '6' : 'tecla6',
    '7' : 'tecla7',
    '8' : 'tecla8',
    '9' : 'tecla9',
    '/' : 'opDividir',
    '*' : 'opMultiplicar',
    '+' : 'opSomar',
    '-' : 'opSubtrair',
    '%' : 'opPercentual',
    '=' : 'igual',
    'Enter' : 'igual',
    'c' : 'limparCalculo',
    'Escape' : 'limparDisplay',
    ',' : 'decimal',
    'Backspace' : 'backSpace',
    'Shift+' : 'opSomar'
}
const mapearTeclado = (evento) => {
    const tecla = evento.key;
    const teclaExiste = () => Object.keys(mapaTeclado).indexOf(tecla) != -1;
    if(teclaExiste()) {
        document.querySelector('.'+mapaTeclado[tecla]).click();
    }
}
document.addEventListener('keydown',mapearTeclado);