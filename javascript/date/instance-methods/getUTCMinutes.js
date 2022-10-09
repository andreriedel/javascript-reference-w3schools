/**
 * o método getUTCMinutes retorna os minutos atuais no fuso horário universal (e
 * não no fuso horário padrão do interpretador)
 * 
 * caso seja definido uma data específica, o método retornará os minutos
 * correspondentes
 */

const date1 = new Date();
console.log(date1.getUTCMinutes());

const date2 = new Date(2000, 6 - 1, 15, 12, 30);
console.log(date2.getUTCMinutes());
