/**
 * o método sort ordena um array
 * 
 * obs.: por padrão o ordenamento é feito de forma alfabética
 *
 * o método sort recebe 1 parâmetro:
 *
 *   1° - compareFunction (opcional): função comparativa que é usada para
 *   ordenar o array de uma forma diferente
 *
 *   a função comparativa recebe 2 parâmetros, que são dois dos elementos do
 *   array que estão sendo comparados (a e b)
 * 
 *   a função pode retornar 3 valores: positivos, zero e negativos
 * 
 *   para exemplificar, tomemos com base a função {a - b}
 *      
 *     valor negativo: o elemento a deve vir antes do elemento b
 *     valor positivo: o elemento a deve vir depois do elemento b
 *     zero: o elemento a e b devem permanecer na ordem original deles no array
 */

/* -------------------------- ordenação alfabética -------------------------- */

let fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits.sort();

console.log("Ordenação alfabética: ", fruits);

/* -------------------------------------------------------------------------- */

// ordenando de forma alfabética decrescente (utilizando objetos)
let items = [
    {name: "Edward",   value:  21},
    {name: "Sharpe",   value:  37},
    {name: "And",      value:  45},
    {name: "The",      value: -12},
    {name: "Magnetic", value:  30},
    {name: "Zeros",    value:  37}
];

items.sort((a, b) => {
    if (a.name < b.name) return 1; /* caso o 'a' seja menor que 'b' retorne
    positivo, fazendo com que 'a' fique depois de 'b' */
    if (a.name > b.name) return -1;
    
    // 'a' igual a 'b'
    return 0;
});

console.log(items);

/* ---------------- ordenação de números de forma alfabética ---------------- */

// por padrão números são ordenados de forma alfabética

let numbers = [40, 100, 1, 5, 25, 10];

console.log("Ordenação de números de forma alfabética: ", numbers.sort());

/* ----------------- ordenação de números de forma crescente ---------------- */

let cre = [40, 100, 1, 5, 25, 10];

cre.sort((a, b) => a - b);

console.log("Ordenação de números de forma crescente: ", cre);

/* ---------------- ordenação de números de forma decrescente --------------- */

let dec = [40, 100, 1, 5, 25, 10];

dec.sort((a, b) => b - a);

console.log("Ordenação de números de forma decrescente: ", dec);

console.log('\n');

/* ----------------- usando a Intl API com o método compare ----------------- */

/* O método compare é extremamente versátil e pode ser usado como a função
comparativa do método sort. Para mais informações consulte esse método na pasta
Intl. */

const arrStr = ["réservé", "reserve", "Cliché", "communiqué", "café", "Adieu"];
const collator1 = new Intl.Collator("pt-BR", { sensitivity: "base" })

arrStr.sort(collator1.compare);

console.log("Ordenanção com o método compare: ", arrStr);

/* ------ ordenação de números de forma crescente com o método compare ------ */

const cre2 = [40, 100, 1, 5, 25, 10];
const collator2 = new Intl.Collator("pt-BR", { numeric: true });

cre2.sort(collator2.compare);

console.log("Ordenção de números de forma crescente com o método compare", cre2);
