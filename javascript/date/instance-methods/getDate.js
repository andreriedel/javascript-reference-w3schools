/**
 * o método getDate retorna o dia atual
 * 
 * caso seja definido uma data específica, o método retornará o dia
 * correspondente
 */

const date1 = new Date();
console.log(date1.getDate());

const date2 = new Date(2000, 6 - 1, 15);
console.log(date2.getDate());
