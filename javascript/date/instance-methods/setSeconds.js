/**
 * o método setSeconds define segundos específicos para uma data
 *
 * o método também pode definir os milissegundos
 */

const date = new Date();
console.log("Instância padrão da data: ", date);

date.setSeconds(30);
console.log("Instância com os segundos definidos: ", date);

date.setSeconds(30, 500);
console.log("Instância com todos os valores definidos (segundos e milissegundos): ", date);
