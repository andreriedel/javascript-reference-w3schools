/**
 * o método fill substitui determinados valores de um array por um novo valor
 *
 * o método fill recebe 3 parâmetros:
 *
 *   1° - value (obrigatório): novo valor que vai ser inserido no array
 *   2° - start (opcional): índice inicial dos elementos que serão substituídos
 *   3° - end (opcional): índice final dos elementos que serão substituídos
 */

let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log("Array antes: ", fruits);

fruits = fruits.fill("New value", 0, 2);

console.log("Resultado: ", fruits);
