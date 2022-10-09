/**
 * o método getUTCMilliseconds retorna os milissegundos atuais no fuso horário
 * universal (e não no fuso horário padrão do interpretador)
 * 
 * caso seja definido uma data específica, o método retornará os milissegundos
 * correspondentes
 */

const date1 = new Date();
console.log(date1.getUTCMilliseconds());

const date2 = new Date(2000, 6 - 1, 15, 12, 30, 30, 500);
console.log(date2.getUTCMilliseconds());
