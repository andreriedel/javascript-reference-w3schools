/**
 * long date (padrão en)
 *
 * forma: Month DD, YYYY HH:mm:ss.sss fuso
 *
 *   Month: mês por extenso ou abreviado (ex.: March ou Mar)
 *   DD: dia
 *   YYYY: ano
 *   HH: hora
 *   mm: minuto
 *   ss: segundo
 *   fuso: caso seja necessário instanciar a hora em outro fuso horário, deve-se
 *         especificar
 */

// definindo a data no padrão UTC
const date1 = new Date("June 15, 2000 12:30:30 UTC");
console.log(date1);
/* a data é definida no padrão UTC; nos navegadores é data é exibida no fuso
horário local */

/* -------------------------------------------------------------------------- */

// definindo a data em outro fuso horário (hora de Brasília)
const date2 = new Date("June 15, 2000 12:30:30 -0300");
console.log(date2);

/* -------------------------------------------------------------------------- */

const date3 = new Date("June 15, 2000 12:30:30");
console.log(date3);
/* caso não seja fornecido o fuso horário, a data será definida no fuso horário
especificado no interpretador, normalmente o fuso horário local */
