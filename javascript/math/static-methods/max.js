/**
 * O método estático max retorna o maior valor dentre um conjunto de números.
 * 
 * Se um dos parâmetros não for número o método retorna NaN.
 * Se nenhum parâmetro for passado o método retornará -Infinity.
 */

console.log(Math.max(5, 20, 15));
console.log(Math.max(5, 'a', 15));
console.log(Math.max());

/* ---------------------- usando em arrays com o spread --------------------- */

const arr = [5, 20, 15];

console.log(Math.max(...arr)); // spread
