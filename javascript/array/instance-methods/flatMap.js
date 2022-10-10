/**
 * o método flatMap é uma junção do método map e do flat; aplica uma função
 * sobre o array e achata ele a um nível de depth
 * 
 * o método flatMap recebe 2 parâmetros:
 * 
 *   1° - function (obrigatório): função de verificação
 *
 *   a função, por sua vez, recebe 3 parâmetros:
 *
 *     1° - currentValue (obrigatório): um dos valores do array
 *     2° - index (opcional): índice de um dos valores do array
 *     3° - array (opcional): array inteiro
 *
 *   2° - thisValue (opcional): valor genérico que pode ser usado dentro do
 *   parâmetro function através da palavra this
 */

const flattened = value => value;

const arr1 = [1, 2, [3], [4, 5], 6, []];

const newArr1 = arr1.flatMap(flattened);

console.log(newArr1);

/* ---------------------------- outras aplicações --------------------------- */

const arr2 = [1, 2, 3, 4];

const newArr2 = arr2.flatMap((x) => [x, x * 2]);

console.log(newArr2);

/* -------------------------------------------------------------------------- */

const arr3 = ["it's Sunny in", "", "California"];

const newArr3 = arr3.flatMap((x) => x.split(" "));

console.log(newArr3);
