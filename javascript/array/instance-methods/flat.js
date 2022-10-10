/**
 * o método flat retorna um array concatenando os sub-arrays de forma recursiva
 * 
 * o método flat recebe 1 parâmetro:
 * 
 *    1° depth (opcional): número de recursões; o default é 1
 */

const arr = [0, 1, 2, [[3, 4]]];

console.log("Array sem flat: ", arr);
console.log("Array com flat (depth default): ", arr.flat());
console.log("Array com flat (depth 2): ", arr.flat(2));