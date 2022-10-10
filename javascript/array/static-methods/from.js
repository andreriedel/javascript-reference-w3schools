/**
 * o método estático from transforma um objeto em um array
 *
 * o método estático from recebe 3 parâmetros:
 *
 *   1° - object (obrigatório): objeto que será convertido em um array
 *   2° - mapFunction (opcional): função que realiza uma ação sobre cada um dos
 *   elementos desse novo array
 *   3° - thisValue (opcional): valor genérico que pode ser usado dentro do
 *   parâmetro mapFunction através da palavra this
 */

/* -------------------------------------------------------------------------- */

function mapFunction(char) {
    return char + this;
}

/* -------------------------------------------------------------------------- */

// transformando uma string em array

const newArr = Array.from("ABCDEFG", mapFunction, 1);

console.log("Resultado: ", newArr);
