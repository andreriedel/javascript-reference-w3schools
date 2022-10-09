/**
 * o método toDateString converte a data para uma string na formatação en-US; o
 * fuso horário utilizado para exibir é o padrão do interpretador; a string
 * contém apenas informações de ano, mês e dia
 * 
 * caso seja definido uma data específica, o método retornará a data
 * correspondente
 */

const date1 = new Date();
console.log(date1);
console.log(date1.toDateString());

const date2 = new Date(2000, 6 - 1, 15);
console.log(date2);
console.log(date2.toDateString());
