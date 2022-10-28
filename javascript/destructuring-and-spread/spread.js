/**
 * O operador spred serve para desempacotar um objeto iterável a fim de utilizar
 * os valores contidos nele (como em chamadas de funções).
 */

/* -------------------------------------------------------------------------- */
/*                              spread em arrays                              */
/* -------------------------------------------------------------------------- */

console.log("\nSPREAD EM ARRAYS\n");

/* ---------------------- spread em chamada de funções ---------------------- */

const sum = (x, y, z) => x + y + z;

const numbers = [1, 2, 3];

console.log("Spread em chamada de funções:");
console.log(sum(...numbers));

/* -------------------- spread para atribuição de valores ------------------- */

const arr = [1, 2, 3];

const newArr = [...arr, 4];

console.log("\nSpread para atribuição de valores:");
console.log(newArr);

/* ---------------------------- spread em classes --------------------------- */

const dateFields = [1970, 0, 1];
const date = new Date(...dateFields);

console.log("\nSpread em classes:");
console.log(date);

/* -------------------------- spread em flat arrays ------------------------- */

const unflatArr = [1, 2, [3, 4]];

const flattened = (arr) => [].concat(...arr);

console.log("\nSpread em flat arrays");
console.log(flattened(unflatArr));

/* -------------------------------------------------------------------------- */
/*                              spread em objetos                             */
/* -------------------------------------------------------------------------- */

console.log("\nSPREAD EM OBJETOS\n");

const obj = { a: 10, b: 20, c: 30, d: 40 };

const objClone = { ...obj };

console.log(objClone);

/* ----------------------- spread em objetos mesclados ---------------------- */

const obj1 = { foo: "bar", x: 42 };
const obj2 = { foo: "baz", y: 13 };

let mergedObj = { ...obj1, ...obj2 };

console.log("\nEm objetos mesclados:");
console.log(mergedObj);
