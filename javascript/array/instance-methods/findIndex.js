/**
 * NÃO FUNCIONA NO NODE
 * 
 * o método findIndex verifica se os elementos de um array são válidos em
 * uma determinada função e retorna o índice do primeiro desses elementos; a
 * verificação é feita da esquerda para a direita
 *
 * o método findIndex recebe 2 parâmetros:
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
 *  parâmetro function através da palavra this
 */

function olderThan(value, index, array) {
  console.log(`Valor sendo verificado: ${value}, correpondente ao index ${index}, do array [${array}]`);

  return value >= this; // faz a verificação booleana
}

/* -------------------------------------------------------------------------- */

const ages = [32, 33, 17, 40];

const olderThan18Idx = ages.findIndex(olderThan, 18);

console.log("Resultado: ", olderThan18Idx);
