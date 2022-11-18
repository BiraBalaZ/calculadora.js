console.log('Que operação você quer fazer?\n[1] Adição     [2] Subtração\n[3] Divisão    [4] Multiplicação')
var operacao = prompt('');

var num1 = Number(prompt('Digite o primeiro numero da operação'));
var num2 = Number(prompt('Digite o segundo numero da operação'));

var res1 = num1 + num2;
var res2 = num1 - num2;
var res3 = num1 / num2;
var res4 = num1 * num2;

if (operacao == 1) {
    console.log(`${num1} + ${num2} = ${res1}`);
}
else if (operacao == 2) {
    console.log(`${num1} - ${num2} = ${res2}`);
}
else if (operacao == 3) {
    console.log(`${num1} / ${num2} = ${res3}`);
}
else if (operacao == 4) {
    console.log(`${num1} * ${num2} = ${res4}`);
}
else {
    console.log('Impossível calcular.');
}
