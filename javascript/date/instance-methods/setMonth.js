/**
 * o método setMonth define um mês específico para uma data
 *
 * o método também pode definir o dia
 */

const date = new Date();
console.log("Instância padrão da data: ", date);

date.setMonth(6 - 1);
console.log("Instância com o mês definido: ", date);

date.setMonth(6 - 1, 15);
console.log("Instância com todos os valores definidos (mês e dia): ", date);
