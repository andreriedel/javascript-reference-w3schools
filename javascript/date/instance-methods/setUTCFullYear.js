/**
 * o método setUTCFullYear define um ano específico para uma data no padrão
 * UTC
 *
 * o método também pode definir o mês e o dia
 */

const date = new Date();
console.log("Instância padrão da data: ", date);

date.setUTCFullYear(2000);
console.log("Instância com o ano define: ", date);

date.setUTCFullYear(2000, 6 - 1, 15);
console.log(
  "Instância com todos os valores configurados (ano, mês e dia): ",
  date
);
 