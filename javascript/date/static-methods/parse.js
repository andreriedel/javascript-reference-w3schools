/**
 * o método parse transforma uma data no formato date string em milissegundos
 * desde January 01, 1970, 00:00:00 UTC
 */

// transformando do formato dateString (ISO date) em milissegundos
console.log(Date.parse('2000-06-15T12:30:30.500Z'));

// transformando do formato dateString (short date) em milissegundos
console.log(Date.parse('06/15/2000 12:30:30 UTC'));

// transformando do formato dateString (long date) em milissegundos
console.log(Date.parse('June 15, 2000 12:30:30 UTC'));
