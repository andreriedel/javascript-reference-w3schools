/**
 * o método getUTCDay retorna o dia da semana atual no fuso horário universal (e
 * não no fuso horário padrão do interpretador)
 * obs.: domingo = 0, segunda = 1, ...
 * 
 * caso seja definido uma data específica, o método retornará o dia da semana
 * correspondente
 */

const date1 = new Date();
console.log(date1.getUTCDay());

const date2 = new Date(2000, 6 - 1, 15);
console.log(date2.getUTCDay());
