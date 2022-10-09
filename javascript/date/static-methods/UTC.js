/**
 * o método UTC pega os milissegundos desde January 01, 1970, 00:00:00 UTC até
 * uma data específica
 * 
 * esse método também é usado para fazer instâncias da classe Date no fuso
 * horário UTC, ao invés do fuso horário local
 */

const date1 = Date.UTC(2000, 6 - 1, 15, 12, 30, 30, 500);
console.log(date1);

const date2 = new Date(Date.UTC(2000, 06 - 1, 15, 12, 30, 30, 500));
console.log(date2);
