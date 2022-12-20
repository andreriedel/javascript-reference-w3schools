/**
 * o atributo prototype permite adicionar um método novo ao tipo Boolean
 */

Boolean.prototype.myColor = function () {
  if (this == true) return "green";
  else return "red";
};

/* -------------------------------------------------------------------------- */

const color1 = true;

res1 = color1.myColor();

console.log("Resultado: ", res1);

/* -------------------------------------------------------------------------- */

const color2 = false;

res2 = color2.myColor();

console.log("Resultado: ", res2);
