/**
 * o método forEach percorre um laço de repetição para cada um dos elementos de
 * um array, e realiza uma ação em cima dele
 *
 * o método forEach recebe 2 parâmetros:
 *
 *   1° - function (obrigatório): função de verificação
 *
 *   a função, por sua vez, recebe 3 parâmetros:
 *
 *     1° - currentValue (obrigatório): um dos valores do array
 *     2° - index (opcional): índice de um dos valores do array
 *     3° - array (opcional): array inteiro
 *
 *   2° - thisValue (opcional): valor genérico que pode ser usado dentro do
 *   parâmetro function através da palavra this
 */

function myFunction(value, index, array) {
  console.log(`Valor sendo exibido: ${value}, correpondente ao index ${index}, do array [${array}]`);
}

let sum = 0;

function sumValues(value) {
  sum += value;
}

function times(value, index, array) {
  array[index] = value * this;
}

/* -------------------------------------------------------------------------- */

const ages = [32, 33, 17, 40];

ages.forEach(myFunction);

ages.forEach(sumValues);

console.log(sum);

ages.forEach(times, 10);

console.log(ages);
