/**
 * o método shift deleta o primeiro elemento de um array e retorna esse elemento
 * (se for necessário).
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log("Array antes: ", fruits);
 
const el = fruits.shift();
 
console.log("Array depois: ", fruits);
console.log("Elemento deletado: ", el);
 