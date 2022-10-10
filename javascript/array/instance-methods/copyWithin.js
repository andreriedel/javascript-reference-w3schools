/**
 * o método copyWithin copia um ou mais elementos de uma posição do array para
 * outra posição do mesmo array
 *
 * o método copyWithin recebe 3 parâmetros:
 *
 *   1° - target (obrigatório): índice para onde os elementos serão copiados
 *   2° - start (opcional): índice inicial dos elementos que serão copiados; por
 *                          padrão é índice 0
 *   3° - end (opcional): índice final dos elementos que serão copiados; por
 *                        padrão é o tamanho do array
 */

const fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];

console.log("Array antes: ", fruits);

fruits.copyWithin(3, 0, 1);

console.log("Resultado: ", fruits);
