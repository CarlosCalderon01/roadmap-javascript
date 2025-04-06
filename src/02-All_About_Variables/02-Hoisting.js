
/**

- El hoisting es un proceso en donde las declaraciones de las variables y funciones que hicimos se "ELEVAN" al ámbito o al contexto en el que se encuentran, sea global o sea en una función

**/

// Ejemplo 1 - Variables
console.log(valorx); // Resultado es: undefined, porque 'valorx' se elevo osea hoisteó, pero aún no se le da un valor.
var valorx = 5; // Asignacion del valor.
console.log(valorx); // Resultado es: 5

// Ejemplo 2 - Función
functionmessage(); // Funcionara plenamente ya que 'functionmessage' se elevo antes de llamarla

function functionmessage() {
  console.log("Hola, mundo!");
}


// Ejemplo 3 - let
console.log(valory); // ReferenceError: Cannot access 'valory' before initialization
let valory = 10;
console.log(valory); // Imprime 10
