/*
    El typeofoperador nos permite ver qué tipo se almacena en una variable.
        Generalmente se usa como typeof x, pero typeof(x)también es posible.
        Devuelve una cadena con el nombre del tipo, como "string".
        Para null devoluciones "object": esto es un error en el idioma, en realidad no es un objeto.

        typeof operator --> metodo para saber el tipo de valor
            El operador typeof devuelve una cadena que indica el tipo de valor del operando.
*/

/*
    El objecttipo es especial.
    El typeofoperador devuelve el tipo de operando.
        + Una llamada a typeof xdevuelve una cadena con el nombre del tipo:
            typeof undefined // "undefined"
            typeof 0 // "number"
            typeof 10n // "bigint"
            typeof true // "boolean"
            typeof "foo" // "string"
            typeof Symbol("id") // "symbol"
            typeof Math // "object"  (1)
            typeof null // "object"  (2)
            typeof alert // "function"  (3)

*/
// Example:
// Expected output: "object"
console.log(typeof Math)

console.log(typeof 42)
// Expected output: "number"

console.log(typeof 'blubber')
// Expected output: "string"

console.log(typeof true)
// Expected output: "boolean"

console.log(typeof undeclaredVariable)
// Expected output: "undefined"

// testing code
// C:\Users\carlo\Documents\carpetacompartida\LearningJavaScript\Class\02-Data Types
