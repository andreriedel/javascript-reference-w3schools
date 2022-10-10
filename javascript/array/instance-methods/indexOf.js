/**
 * o método indexOf verifica se um determinado elemento está contido dentro de
 * um array e retorna o índice desse valor.
 *
 * obs.: caso hajam valores iguais, o método retorna o primeiro índice
 * correspondente
 * obs.: caso o método não encontre nenhum valor correspondente, ele retorna -1
 *
 * o método indexOf recebe 2 parâmeteros:
 *
 *   1° - value (obrigatório): valor a ser verificado
 *   2° - start (opcional): índice inicial da verificação
 */

const fruits = ["Banana", "Orange", "Apple", "Apple"];

console.log("Resultado: ", fruits.indexOf("Apple", 1));
