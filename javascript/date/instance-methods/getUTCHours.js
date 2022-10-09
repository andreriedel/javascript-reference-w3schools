/**
 * o método getUTCHours retorna a hora atual no fuso horário universal (e não no
 * fuso horário padrão do interpretador)
 * 
 * caso seja definido uma data específica, o método retornará a hora
 * correspondente
 */

const date1 = new Date();
console.log(date1.getUTCHours());

const date2 = new Date(2000, 6 - 1, 15, 12);
console.log(date2.getUTCHours());
