/**
 * o método keys cria um objeto array iterator somente com as chaves
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log("Array antes: ", fruits);

let newFruits = fruits.keys();

console.log("Resultado: ");

for (x of newFruits) {
  console.log(x);
}
