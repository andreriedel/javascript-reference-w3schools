/**
 * o método setUTCMilliseconds define milissegundos específicos para uma data
 * no padrão UTC
 */

const date = new Date();
console.log("Instância padrão da data: ", date);

date.setUTCMilliseconds(500);
console.log("Instância com os milissegundos definidos: ", date);
