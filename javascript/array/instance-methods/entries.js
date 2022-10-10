/**
 * o método entries cria um objeto array iterator com pares de chave-valor
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log("Array antes: ", fruits);

const newFruits = fruits.entries();

console.log("Resultado: ", newFruits);

for (x of newFruits)
    console.log(x);
