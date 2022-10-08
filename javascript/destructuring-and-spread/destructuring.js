/**
 * O destructuring serve para desempacotar valores de arrays ou propriedades
 * de um objeto, transformando-os em variáveis distintas.
 */

/* -------------------------------------------------------------------------- */
/*                          destructuring com arrays                          */
/* -------------------------------------------------------------------------- */

console.log("\nDESTRUCTURING COM ARRAYS\n");

const arr = [10, 20, 30, 40, 50];

/* -------------------------------------------------------------------------- */

[a, b] = arr; // cria as variáveis 'a' e 'b' a partir do array

/*
  outras formas:
    const [a, b] = arr;
    let [a, b] = arr;
*/

console.log("Variáveis \'a\' e \'b\':");
console.log(a, b); // 10 e 20

/* -------------------------------------------------------------------------- */

[a, b, , d] = arr; // "pula" a variável 'c'

console.log("\nVariável \'d\':");
console.log(d); // 40

/* -------------------------------------------------------------------------- */

[a, b, ...rest] = arr; /* as variáveis que não foram criadas são incorporadas
a um array criado chamado rest (com o uso do spread) */

console.log("\nArray rest:");
console.log(rest);

/* ------------------------ definindo default values ------------------------ */

/* caso o array seja menor que a quantidade de variáveis usadas no destructuring
é possível definir default values para que essas variáveis não fiquem como
undefined */

[a, b = 20] = [10];

console.log("\nDefault values:");
console.log(a, b); // 10 e 20

/* --------------------------- trocando variáveis --------------------------- */

let x = 1, y = 2;

console.log("\nTrocando variáveis");

console.log(x, y); // 1 e 2

[x, y] = [y, x];

console.log(x, y); // 2 e 1


/* -------------------------------------------------------------------------- */
/*                          destructuring com objetos                         */
/* -------------------------------------------------------------------------- */

console.log("\nDESTRUCTURING COM OBJETOS\n");

const obj = { a: 10, b: 20, c: 30, d: 40 };

/* -------------------------------------------------------------------------- */

({ a, b } = obj); // cria as variáveis 'a' e 'b' a partir do objeto
// o uso dos parênteses é necessário

/*
  outras formas:
    const { a, b } = obj;
    let { a, b } = obj;
*/

/* diferentemente do destructuring para array, as variáveis criadas devem ter os
mesmos nomes dos atributos do objeto */

console.log("\nVariáveis \'a\' e \'b\':");
console.log(a, b); // 10 e 20

/* -------------------------------------------------------------------------- */

({ a, b, ...rest } = obj); /* as variáveis que não foram criadas são
incorporadas a um objeto criado chamado rest (com o uso do spread) */

console.log("\nObjeto rest:");
console.log(rest);

/* -------------------------- renomeando variáveis -------------------------- */

({ a: num1, b: num2 } = obj);

console.log("\nRenomeando variáveis:");
console.log(num1, num2); // 10 e 20.

/* ------------------------ definindo default values ------------------------ */

({ a, b = 20 } = { a: 10 });

console.log("\nDefault values:");
console.log(a, b); // 10 e 20.

/* ------------- definindo default values e renomeando variáveis ------------ */

const nums = { a: 10, b: 20 };

({ a: x = 10, b: y = 20, c: z = 30 } = nums);

console.log("\nDefault values e renomeando variávies:");
console.log(x, y, z); // 10, 20 e 30

/* ----------------------------- objetos com nós ---------------------------- */

const brasil = {
  populacao: "212.6 milhões",
  renda_per_capta: "US$ 6.796,84",
  expectativa_vida: "75 anos",
  pib: "US$ 1.445 trilhões",
  pais: "Brasil",
  idioma: "Português",
  capital: "Brasília",
  moeda: "Real",
  religiao: {
    crista: {
      catolica: "64.6%",
      protestante: "22.2%"
    },
    espirita: "2.0%",
    cadomble: "1.0%",
    outras: "3.2%",
    nenhuma: "7.0%"
  }
};

({ capital, religiao : { crista: { catolica } }, religiao: { outras } } = brasil);
// funciona como uma estrutura recursiva de destructuring

console.log("\nObjeto com nós:");
console.log(capital);
console.log(catolica);
console.log(outras);

/* ----------------- destructuring em assinatura de funções ----------------- */

const capitalDoPais = ({ capital }) => capital;

console.log("\nDestructuring em assinatura de funções:");
console.log(capitalDoPais(brasil));

/* ---- destructuring com nós em assinaturas de funções e default values ---- */

const drawChart = ({ size = "small", coords = { x: 0, y: 0 }, radius = 25 } = {}) => {
  console.log(size, coords, radius, '\n');
}

/*
  Nessa função, é esperado receber um objeto. No entanto, um objeto vazio está
  como default value. Dessa forma é possível invocar a função sem passar nenhum
  parâmetro. A partir do objeto passado é realizado um destructuring, onde
  obrigatoriamente também devem haver default values, pois existe a
  possibilide de se passar um objeto vazio.
*/

drawChart(); // invoca a função drawChart

/* -------------- destructuring com laços de repetição (forof) -------------- */

const people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith"
    },
    age: 35
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones"
    },
    age: 25
  }
]; // array de 2 objetos (objetos com nós)

console.log("\nFor of padrão:");
for (const person of people)
  console.log(person);

// com o destructuring:

console.log("\nFor of com o destructuring:");
for (const { name, family: { father }, age } of people) {
  console.log(`${name} is son of ${father} and he's ${age}`);
}

/* -------------------------------------------------------------------------- */

/*
  Também é possível usar strings no destructuring, desde que o valor delas seja
  igual a da propriedade. Para que funcione, use os colchetes em torno da
  variável que representa a string.
*/

const key = 'z';
({ [key]: foo } = { z: 'bar' });

console.log('\nCom strings:');
console.log(foo); // bar

/* ---------------- destructuring com retorno de funções null --------------- */

const retornaNulo = () => null;

const { nome = "Andre" } = retornaNulo() || {};
/* como a função retorna nulo o operado || faz com que o objeto vazio seja
usado no lugar da função retornaNulo */

console.log('\nDestructuring com retorno de funções null:');
console.log(nome);

/* -------------------------------------------------------------------------- */
/*                     destructuring com arrays e objetos                     */
/* -------------------------------------------------------------------------- */

console.log("\nDESTRUCTURING COM ARRAYS E OBJETOS\n");

const props = [
  { id: 1, name: 'Fizz ' },
  { id: 2, name: 'Buzz' },
  { id: 3, name: 'FizzBuzz' }
];

([, , { name }] = props);

console.log(name); // FizzBuzz
