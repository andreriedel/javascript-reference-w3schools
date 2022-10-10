/**
 * o método join une os elementos de um array e transforma em uma string
 *
 * o método join recebe 1 parâmetro:
 *
 *   1° - separator (opcional): separador que indica o caractere que vai seperar
 *   os elementos do array
 *
 *   obs.: caso não seja passado esse parâmetro, o separador será uma vírgula
 */

const fruits = ["Banana", "Orange", "Apple", "Mango"];

const energy = fruits.join(" - ");

console.log("Resultado: ", energy);
