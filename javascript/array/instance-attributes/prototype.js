/**
 * o atributo prototype permite adicionar um método novo ao array
 */

Array.prototype.myUpperCase = function () {
  for (let i = 0; i < this.length; i++)
    this[i] = this[i].toUpperCase();
}

/* -------------------------------------------------------------------------- */

let fruits = ["Banana", "Orange", "Apple", "Mango"];

console.log("Array antes: ", fruits);

fruits.myUpperCase();

console.log("Array depois: ", fruits);
