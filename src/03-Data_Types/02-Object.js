/**
  
  Object -> se crea con {}
      clave: "valor"

  Y un tipo de datos no primitivo:
      "object" para estructuras de datos más complejas.

  Summary

    Objects are associative arrays with several special features.
      They store properties (key-value pairs), where:
      Property keys must be strings or symbols (usually strings).
      Values can be of any type.

    To access a property, we can use:
      The dot notation: obj.property.
      Square brackets notation obj["property"].
      Square brackets allow taking the key from a variable, like obj[varWithKey].

    Additional operators:
      To delete a property: delete obj.prop.
      To check if a property with the given key exists: "key" in obj.
      To iterate over an object: for (let key in obj) loop.

*/

let user1 = new Object(); // "object constructor" syntax
let user2 = {}; // "object literal" syntax

// practicando objetos 1

var carros = {};

const Os = (carros = {
  nombre: "chevrolet",
  costo: 5000,
  año: 2000,
  venta: true,
  saludar: function () {
    console.log(carros);
  },
});

// imprimiendo

// console.log(carros);
carros.saludar();
