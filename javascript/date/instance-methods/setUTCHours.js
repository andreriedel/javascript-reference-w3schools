/**
 * o método setUTCHours define uma hora específica para uma data no padrão
 * UTC
 *
 * o método também pode definir os minutos, segundos e milissegundos
 */

const date = new Date();
console.log("Instância padrão da data: ", date);

date.setUTCHours(12);
console.log("Instância com a hora definida: ", date);

date.setUTCHours(12, 30, 30, 500);
console.log("Instância com todos os valores definidos (hora, minutos, segundos e milissegundos): ", date);
 