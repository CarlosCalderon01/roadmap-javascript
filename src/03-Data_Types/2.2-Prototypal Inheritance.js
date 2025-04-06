/**

La "Herencia Prototípica" (Prototypal Inheritance) es una característica en JavaScript que
    permite agregar métodos y propiedades a objetos. Es un método mediante el cual un objeto
    puede heredar las propiedades y métodos de otro objeto. En lugar de depender de clases
    como en otros lenguajes orientados a objetos, JavaScript utiliza prototipos para lograr la
    herencia y reutilización de código.

Aquí hay una explicación más detallada:

1- Herencia de propiedades y métodos: En la herencia prototípica, un objeto puede heredar
    propiedades y métodos de otro objeto. Esto significa que un objeto puede tener acceso a las
    propiedades y métodos de su "prototipo". Si un objeto no tiene una propiedad o método
    particular, JavaScript buscará en su prototipo para ver si el prototipo lo tiene.

2- Prototipo: Cada objeto en JavaScript tiene una referencia a su "prototipo", que es otro objeto
    del cual hereda propiedades y métodos. Esto crea una cadena de prototipos, donde los
    objetos pueden heredar de múltiples niveles.

3- Object.getPrototypeOf y Object.setPrototypeOf: Para acceder y establecer explícitamente
    el prototipo de un objeto, puedes utilizar las funciones `Object.getPrototypeOf(obj)` para
    obtener el prototipo de `obj`, y `Object.setPrototypeOf(obj, nuevoPrototipo)` para
    establecer el prototipo de `obj` como `nuevoPrototipo`.

**/

// Un ejemplo simple de herencia prototípica:
const animal = {
  hablar: function () {
    console.log('Hace un sonido')
  }
}

const foca = Object.create(animal) // foca hereda de animal
foca.hablar() // Salida: "Hace un sonido"

const alcon = Object.create(animal) // alcon también hereda de animal
alcon.hablar() // Salida: "Hace un sonido"

/**

En este ejemplo, hemos creado un objeto `animal` con un método `hablar`, y luego hemos
    creado objetos `foca` y `alcon` que heredan ese método a través de la herencia prototípica.

La herencia prototípica es una de las características fundamentales de JavaScript y se utiliza
    ampliamente para organizar y compartir código en aplicaciones. Aunque JavaScript también
    admite la herencia basada en clases a partir de la especificación ES6 (ECMAScript 2015), la
    herencia prototípica sigue siendo una parte importante de la programación en JavaScript.

**/

// SEGUNDO INTENTO 2

// Definimos un constructor de objetos llamado "Animal"
function Animal (nombre) {
  this.nombre = nombre
}

// Agregamos un método al prototipo de "Animal"
Animal.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre}`)
}

// Creamos un objeto "perro" que hereda de "Animal"
const perro = new Animal('Rex')

// Llamamos al método del prototipo en el objeto "perro"
perro.saludar() // Salida: "Hola, soy Rex"

// Creamos otro objeto "gato" que también hereda de "Animal"
const gato = new Animal('Whiskers')

// Llamamos al método del prototipo en el objeto "gato"
gato.saludar() // Salida: "Hola, soy Whiskers"
