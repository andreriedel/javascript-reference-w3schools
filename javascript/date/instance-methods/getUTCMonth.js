/**
 * o método getUTCMonth retorna o mês atual no fuso horário universal (e não no
 * fuso horário padrão do interpretador)
 * obs.: o método usa a contagem de array, ou seja, começa no índice zero
 * portanto o mês é definido com o valor real do mês - 1 unidade
 * 
 * caso seja definido uma data específica, o método retornará o mês
 * correspondente
 */

const date1 = new Date();
console.log(date1.getUTCMonth());

const date2 = new Date(2000, 6 - 1);
console.log(date2.getUTCMonth());
