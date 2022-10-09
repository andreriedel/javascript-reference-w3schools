/**
 * o método setMinutes define minutos específicos para uma data
 *
 * o método também pode definir os segundos e milissegundos
 */

const date = new Date();
console.log("Instância padrão da data: ", date);

date.setMinutes(30);
console.log("Instância com os minutos definidos: ", date);

date.setMinutes(30, 30, 500);
console.log("Instância com todos os valores definidos (minutos, segundos e milissegundos): ", date);
