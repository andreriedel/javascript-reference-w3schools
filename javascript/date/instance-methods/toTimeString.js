/**
 * o método toTimeString converte a data para uma string na formatação en-US; o
 * fuso horário utilizado para exibir é o padrão do interpretador; a string
 * contém apenas informações de hora, minutos e segundos, além do fuso horário
 * utilizado
 * 
 * caso seja definido uma data específica, o método retornará a data
 * correspondente
 */

const date1 = new Date();
console.log(date1);
console.log(date1.toTimeString());

const date2 = new Date(2000, 6-1, 15, 12, 30, 30);
console.log(date2);
console.log(date2.toTimeString());
 