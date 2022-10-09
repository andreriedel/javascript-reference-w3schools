/**
 * o método getFullYear retorna o ano atual com quatro dígitos
 * 
 * caso seja definido uma data específica, o método retornará o ano
 * correspondente
 */

const date1 = new Date();
console.log(date1.getFullYear());

const date2 = new Date(2000, 6 - 1, 15);
console.log(date2.getFullYear());
