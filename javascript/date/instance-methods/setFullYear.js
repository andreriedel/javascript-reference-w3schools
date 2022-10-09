/**
 * o método setFullYear define um ano específico para uma data
 *
 * o método também pode definir o mês e o dia
 */

const date = new Date();
console.log("Instância padrão da data: ", date);

date.setFullYear(2000);
console.log("Instância com o ano definido: ", date);

date.setFullYear(2000, 6 - 1, 15);
console.log("Instância com todos os valores definidos (ano, mês e dia): ", date);
