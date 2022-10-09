/**
 * o método getUTCFullYear retorna o ano atual com quatro dígitos no fuso
 * horário universal (e não no fuso horário padrão do interpretador)
 * 
 * caso seja definido uma data específica, o método retornará o ano
 * correspondente
 */

const date1 = new Date();
console.log(date1.getUTCFullYear());

const date2 = new Date(2000, 6 - 1, 15);
console.log(date2.getUTCFullYear());
