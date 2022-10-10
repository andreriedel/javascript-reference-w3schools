/**
 * o método toLocaleString formata a saída de acordo com os parâmetros passados;
 * o método utiliza os parâmetros de acordo com os tipos de dados contidos no
 * array
 * 
 * o método toLocaleString recebe 2 parâmetros
 * 
 *   1° - locale: string contendo informações do locale
 *   2° - options: objeto que altera o comportamento do método
 * 
 * veja mais sobre o funcionamento nos métodos toLocaleString dos respectivos
 * tipos de dados
 */

/* ------------------------ exemplo com array de data ----------------------- */

const dateArr = [
  new Date(),
  new Date(2000, 6 - 1, 15),
  new Date(2020, 10 - 1, 5)
];

console.log(
  dateArr.toLocaleString(
    "pt-br",
    {
      dateStyle: "short",
      timeStyle: "short",
    }
  )
);