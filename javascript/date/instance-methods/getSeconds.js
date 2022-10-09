/**
 * o método getSeconds retorna os segundos atuais
 * 
 * caso seja definido uma data específica, o método retornará os segundos
 * correspondentes
 */

const date1 = new Date();
console.log(date1.getSeconds());

const date2 = new Date(2000, 6 - 1, 15, 12, 30, 30);
console.log(date2.getSeconds());
