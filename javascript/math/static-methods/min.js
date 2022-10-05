/**
 * O método estático min retorna o menor valor dentre um conjunto de números.
 * 
 * Se um dos parâmetros não for número o método retorna NaN.
 * Se nenhum parâmetro for passado o método retornará Infinity.
 */

console.log(Math.min(5, 20, 15));
console.log(Math.min(5, 'a', 15));
console.log(Math.min());

/* ---------------------- usando em arrays com o spread --------------------- */

const arr = [5, 20, 15];

console.log(Math.min(...arr)); // spread
 