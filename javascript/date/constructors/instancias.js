/* ---------------------- instanciamento sem parâmetros --------------------- */
// instancia a data atual

const date1 = new Date();
console.log("Instância sem parâmetros: ", date1);

console.log("\n");

/* ---------------------- instanciamento com parâmetros --------------------- */
// instancia uma data específica

const date2 = new Date("2000-03-15T12:30:30.500Z"); // dateString (ISO date)
console.log("Instância por dateString (ISO date): ", date2);

const date3 = new Date("2000/03/15 12:30:30 UTC"); // dateString (short date)
console.log("Instância por dateString (short date): ", date3);

const date4 = new Date("June 15, 2000 12:30:30 UTC"); // dateString (long date)
console.log("Instância por dateString (long date): ", date4);

console.log('\n');

/* ------------------ instaciamento por valores numéricos: ------------------ */
// instancia uma data específica

console.log("Instância por valores numéricos:");

/**
 * ano: em 4 dígitos
 *
 * mês: 1 ou 2 dígitos
 *
 *   o parâmetro recebe valores entre 0 e 11 (o mês - 1 unidade), mas outros
 *   valores são aceitos:
 *
 *   -1 irá retornar o último mês do último ano
 *   12 irá retornar o primeiro mês do próximo ano
 *   13 irá retornar o segundo mês do próximo ano
 *
 * dia: 1 ou 2 dígitos
 *
 *   o parâmetro recebe valores entre 1 e 31, mas outros valores são aceitos:
 *
 *   0 irá retornar o último dia do mês anterior
 *   -1 irá retornar o dia anterior ao último dia do mês anterior
 *   se o mês tiver 31 dias: 32 irá retornar o primeiro dia do próximo mês
 *   se o mês tiver 30 dias: 32 irá retornar o segundo dia do próximo mês
 *
 * horas: 1 ou 2 dígitos
 *
 *   o parâmetro recebe valores entre 0 e 23, mas outros valores são aceitos:
 *
 *   -1 irá retornar a última hora do dia anterior
 *   24 irá retornar a primeira hora do próximo dia
 *
 * minutos: 1 ou 2 dígitos
 *
 *   o parâmetro recebe valores entre 0 e 59, mas outros valores são aceitos:
 *
 *   -1 irá retornar o último minuto da hora anterior
 *   60 irá retornar o primeiro minuto da próxima hora
 *
 * segundos: 1 ou 2 dígitos
 *
 *   O parâmetro recebe valores entre 0 e 59, mas outros valores são aceitos:
 *
 *   -1 irá retornar o último segundo do minuto anterior
 *   60 irá retornar o primeiro segundo do próximo minuto
 *
 * milissegundos: 1, 2 ou 3 dígitos
 *
 *   O parâmetro recebe valores entre 0 e 999, mas outros valores são aceitos:
 *
 *   -1 irá retornar o último milissegundo do segundo anterior
 *   1000 irá retornar o primeiro milissegundo do próximo segundo
 *   1001 irá retornar o segundo milissegundo do próximo segundo
 */

const date5 = new Date(0); // milissegundos
console.log("Instância por milissegundos: ", date5);
/* as datas são contadas em milissegundos a partir de:
January 01, 1970, 00:00:00 UTC (Universal Time Coordinated) */

/* -------------------------------------------------------------------------- */

// ano, mês, dia, hora, minutos, segundos, milissegundos
const date6 = new Date(2000, 06 - 1, 15, 12, 30, 30, 500); 
console.log("Instância com ano, mês, dia, hora, minutos, segundos e \
milissegundos: ", date6);

/* obs.: como não é definido o fuso horário é utilizado o padrão do
interpretador que normalmente é o fuso horário local */

/* -------------------------------------------------------------------------- */

const date7 = new Date(2000, 06 - 1, 15, 12, 30, 30);
console.log("Instância com ano, mês, dia, hora, minutos e segundos: ", date7);

/* -------------------------------------------------------------------------- */

const date8 = new Date(2000, 06 - 1, 15, 12, 30);
console.log("Instância com ano, mês, dia, hora e minutos: ", date8);

/* -------------------------------------------------------------------------- */

const date9 = new Date(2000, 06 - 1, 15, 12);
console.log("Instância com ano, mês, dia e hora: ", date9);

/* -------------------------------------------------------------------------- */

const date10 = new Date(2000, 06 - 1, 15);
console.log("Instância com ano, mês e dia: ", date10);

/* -------------------------------------------------------------------------- */

const date11 = new Date(2000, 06 - 1);
console.log("Instância com ano e mês: ", date11);

/* -------------------------------------------------------------------------- */

// instância com o fuso horarário UTC, ao invés do fuso horário local
const date12 = new Date(Date.UTC(2000, 06 - 1, 15, 12, 30, 30, 500));
console.log("Instância com o fuso horarário UTC, ao invés do fuso horário local: ", date12);
