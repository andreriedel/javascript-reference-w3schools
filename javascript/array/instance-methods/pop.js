/**
 * o método pop deleta o último elemento de um array e retorna esse elemento (se
 * for necessário)
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log("Array antes: ", fruits);

const el = fruits.pop();

console.log("Array depois: ", fruits);
console.log("Elemento deletado: ", el);
