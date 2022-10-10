/**
 * o método cria um sub-array a partir de um array e retorna esse array criado
 *
 * o método slice recebe 2 parâmetros:
 *
 *   1° - start (opcional): um valor inteiro que representa o início; valores
 *   negativos fazem a contagem começar do fim do array
 *   2° - end (opcional): um valor inteiro que representa o fim; valores
 *   negativos fazem a contagem começar do fim do array
 */

const fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];

const newFruits = fruits.slice(0, 3)

console.log(newFruits);
