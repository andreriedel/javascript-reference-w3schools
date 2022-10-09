/**
 * o método getHours retorna a hora atual
 * 
 * caso seja definido uma data específica, o método retornará a hora
 * correspondente
 */

const date1 = new Date();
console.log(date1.getHours());

const date2 = new Date(2000, 6 - 1, 15, 12);
console.log(date2.getHours());
