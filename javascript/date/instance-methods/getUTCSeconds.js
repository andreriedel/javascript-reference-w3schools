/**
 * o método getUTCSeconds retorna os segundos atuais no fuso horário universal
 * (e não no fuso horário padrão do interpretador)
 * 
 * caso seja definido uma data específica, o método retornará os segundos
 * correspondentes
 */

const date1 = new Date();
console.log(date1.getUTCSeconds());

const date2 = new Date(2000, 6 - 1, 15, 12, 30, 30);
console.log(date2.getUTCSeconds());
