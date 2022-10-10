/**
 * o método concat concatena dois ou mais arrays em um novo array
 * 
 * o método concat recebe 1 (ou mais) parâmetro(s):
 * 
 *   1° - array1, array2, arrayn... (obrigatório): arrays a serem concatenados
 */

const hege = ["Cecilie", "Lone"];
const stale = ["Emil", "Tobias", "Linus"];

console.log("Array 1: ", hege);
console.log("Array 2: ", stale);

const newArray = hege.concat(stale);

console.log("Resultado: ", newArray);
