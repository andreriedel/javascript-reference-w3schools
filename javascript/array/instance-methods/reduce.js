/**
 * o método reduce reduz o array a um único valor; o método executa uma função 
 * da esquerda para a direita para realizar a redução.
 *
 * o método reduce recebe 2 parâmetros:
 *
 *   1° - function (obrigatório): função de redução
 * 
 *   a função, por sua vez, recebe 4 parâmetros:
 *
 *     1° - total (obrigatório): valor final da redução, contudo é possível
 *     definir um valor inicial através do segundo parâmetro do método que é
 *     usado para iniciar a redução
 *     2° - currentValue (obrigatório): um dos valores do array
 *     3° - index (opcional): índice de um dos valores do array
 *     4° - array (opcional): array inteiro
 *
 *   2° - initialValue (opcional): valor incial
 */

function myFunction(total, value, index, array) {
  console.log("Total: ", total);
  console.log(`Valor utilizado para a redução: ${value}, correpondente ao index ${index}, do array [${array}]`);

  return total - value;
}

/* -------------------------------------------------------------------------- */

const numbers = [175, 50, 25];

const res = numbers.reduce(myFunction, 1000);

console.log("Resultado: ", res);

console.log('\n');

/* -------------------------- outros usos do reduce ------------------------- */

// flat an array

const arr = [1, 2, [3, 4]];

flatArr = arr.reduce((acc, value) => acc.concat(value), []);

console.log(flatArr);