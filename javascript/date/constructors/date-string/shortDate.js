/**
 * short date (padrão en)
 *
 * forma: MM/DD/YYYY HH:mm:ss.sss fuso
 *
 *   MM: mês
 *   DD: dia
 *   YYYY: ano
 *   HH: hora
 *   mm: minuto
 *   ss: segundo
 *   fuso: caso seja necessário instanciar a hora em outro fuso horário, deve-se
 *          especificar
 */

// definindo a data no padrão UTC
const date1 = new Date("06/15/2000 12:30:30 UTC");
console.log(date1);
/* a data é definida no padrão UTC; nos navegadores é data é exibida no fuso
horário local */

/* -------------------------------------------------------------------------- */

// definindo a data em outro fuso horário (hora de Brasília)
const date2 = new Date("06/15/2000 12:30:30 -0300");
console.log(date2);

/* -------------------------------------------------------------------------- */

// definindo a data no fuso horário local (-0300)
const date4 = new Date("06/15/2000 12:30:30");
console.log(date4);
/* caso não seja fornecido o fuso horário, a data será definida no fuso horário
especificado no interpretador, normalmente o fuso horário local */

/* ------------------------ definindo data com array ------------------------ */

/* ao instanciar uma data passando um array como parâmetro, o interpretador
transforma o array em string, ocasionando numa instância similar a do tipo
short date */

const date5 = new Date([6, 15, 2000]);
console.log(date5);
