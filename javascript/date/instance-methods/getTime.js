/**
 * o método getTime retorna os milessegundos desde
 * January 01, 1970, 00:00:00 UTC
 * 
 * caso seja definido uma data específica, o método retornará os milissegundos
 * correspondentes
 */

const date1 = new Date();
console.log(date1.getTime());

const date2 = new Date(2000, 6 - 1, 15, 12, 30, 30, 500);
console.log(date2.getTime());
