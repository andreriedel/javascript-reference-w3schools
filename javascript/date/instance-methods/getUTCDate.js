/**
 * o método getUTCDate retorna o dia atual no fuso horário universal (e não no
 * fuso horário padrão do interpretador)
 * 
 * caso seja definido uma data específica, o método retornará o dia
 * correspondente
 */

const date1 = new Date();
console.log(date1.getUTCDate());

const date2 = new Date(2000, 6 - 1, 15);
console.log(date2.getUTCDate());
