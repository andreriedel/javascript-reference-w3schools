/**
 * o método setUTCSeconds define segundos específicos para uma data no
 * padrão universal
 *
 * o método também pode definir os milissegundos
 */

const date = new Date();
console.log("Instância padrão da data: ", date);

date.setUTCSeconds(30);
console.log("Instância com os segundos definidos: ", date);

date.setUTCSeconds(30, 500);
console.log("Instância com todos os valores definidos (segundos e milissegundos): ", date);
