/**
 * o método lastIndexOf verifica se um determinado elemento está contido dentro
 * de um array e retorna o índice desse valor
 *
 * obs.: caso hajam valores iguais, o método retorna o último índice
 * correspondente
 * obs.: caso o método não encontre nenhum valor correspondente, ele retorna -1
 *
 * o método lastIndexOf recebe 2 parâmeteros:
 *
 *   1° - value (obrigatório): valor a ser verificado
 *   2° - start (opcional): índice inicial da verificação (neste caso a
 *   verificação é feita da direita para a esquerda)
 */

const fruits = ["Banana", "Orange", "Apple", "Apple"];

console.log("Resultado: ", fruits.lastIndexOf("Apple", 2));
