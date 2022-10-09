/**
 * o método getMinutes retorna os minutos atuais
 * 
 * caso seja definido uma data específica, o método retornará os minutos
 * correspondentes
 */

const date1 = new Date();
console.log(date1.getMinutes());

const date2 = new Date(2000, 6 - 1, 15, 12, 30);
console.log(date2.getMinutes());
