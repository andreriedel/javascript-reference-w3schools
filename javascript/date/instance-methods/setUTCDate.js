/**
 * o método setUTCDate define um dia específico para uma data no padrão
 * UTC
 */

const date = new Date();
console.log("Instância padrão da data: ", date);

date.setUTCDate(15);
console.log("Instância com o dia definido: ", date);
