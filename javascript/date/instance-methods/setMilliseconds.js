/**
 * o método setMilliseconds define milissegundos específicos para uma data
 */

const date = new Date();
console.log("Instância padrão da data: ", date);

date.setMilliseconds(500);
console.log("Instância com os milissegundos definidos: ", date);
