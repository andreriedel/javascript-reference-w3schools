/**
 * o método setUTCMonth define um mês específico para uma data no padrão
 * universal
 *
 * o método também pode definir o dia
 */

const date = new Date();
console.log("Instância padrão da data: ", date);

date.setUTCMonth(6 - 1);
console.log("Instância com o mês definido: ", date);

date.setUTCMonth(6 - 1, 15);
console.log("Instância com todos os valores definidos (mês e dia): ", date);
 