/**
 * O método map altera os elementos de um array através uma determinada função
 *
 * obs.: a diferença entre o método map e o forEach é que o map cria um novo
 * array, e o forEach manipula um array já existente
 *
 * o método map recebe 2 parâmetros:
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

function times(value, index, array) {
  console.log(`Valor sendo alterado: ${value}, correpondente ao index ${index}, do array [${array}]`);

  return value * this;
}

/* -------------------------------------------------------------------------- */

const ages = [32, 33, 17, 40];

const newArr = ages.map(times, 10);

console.log("Resultado: ", newArr);
