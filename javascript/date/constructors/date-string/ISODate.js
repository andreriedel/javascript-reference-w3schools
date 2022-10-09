/**
 * ISO
 *
 * forma: YYYY-MM-DDTHH:mm:ss.sssZ
 *
 *   YYYY: ano
 *   MM: mês
 *   DD: dia
 *   T: separador das informações de data e da hora
 *   HH: hora
 *   mm: minuto
 *   ss: segundo
 *   sss: milessegundos
 *   Z: horário global (UTC ou GMT)
 * 
 *   obs.: caso seja necessário instanciar a hora em outro fuso horário, ao
 *         invés do Z, deve-se colocar o fuso horário específico
 */

// definindo a data no padrão UTC
const date1 = new Date('2000-06-15T12:30:30.500Z');
console.log(date1);
/* a data é definida no padrão UTC; nos navegadores é data é exibida no fuso
horário local */

/* -------------------------------------------------------------------------- */

// definindo a data em outro fuso horário (hora de Brasília)
const date2 = new Date('2000-06-15T12:30:30.500-0300');
console.log(date2);

/* -------------------------------------------------------------------------- */

const date3 = new Date('2000-06-15T12:30:30.500');
console.log(date3);
/* caso não seja fornecido o fuso horário, a data será definida no fuso horário
especificado no interpretador, normalmente o fuso horário local */
