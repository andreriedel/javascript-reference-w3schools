/**
 * o método toUTCString converte a data para uma string na formatação UTC; o
 * fuso horário utilizado para exibir é o universal
 * 
 * caso seja definido uma data específica, o método retornará a data
 * correspondente
 */

const date1 = new Date();
console.log(date1);
console.log(date1.toUTCString());

const date2 = new Date(2000, 6 - 1, 15, 12, 30, 30, 500);
console.log(date2);
console.log(date2.toUTCString());
