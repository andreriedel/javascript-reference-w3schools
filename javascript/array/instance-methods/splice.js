/**
 * o método splice insere e/ou remove items de um array
 *
 * o método splice recebe 3 parâmetros:
 *
 *   1° - index (obrigatório): índice de onde a inserção ou remoção deve
 *   acontecer
 *   2° - howmany (opcional): quantidade de itens excluídos (se refere a
 *   quantidade de itens que serão excluídos a partir do índice do primeiro
 *   parâmetro; caso seja 0 nenhum item será excluído)
 *   3° - item1, ..., itemN (opcional): itens adicionados (indica os valores a
 *   serem inseridos)
 */

// inserindo itens

const fruits1 = ["Banana", "Orange", "Apple", "Mango"];

fruits1.splice(2, 0, "Lemon", "Kiwi");
console.log("Inserindo itens: ", fruits1);

/* -------------------------------------------------------------------------- */

// removendo itens

const fruits2 = ["Banana", "Orange", "Apple", "Mango"];

fruits2.splice(1, 1);
console.log("Removendo itens: ", fruits2);

/* -------------------------------------------------------------------------- */

// inserindo e removendo itens

const fruits3 = ["Banana", "Orange", "Apple", "Mango"];

fruits3.splice(1, 1, "Lemon");
console.log("Inserindo e removendo itens: ", fruits3);
