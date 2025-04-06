// Ejemplo 1: Agregar un método al prototipo de un objeto --------------------------------------------

function Persona (nombre, edad) {
  this.nombre = nombre
  this.edad = edad
}

// Agregar un método al prototipo de Persona
Persona.prototype.saludar = function () {
  console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`)
}

const persona1 = new Persona('Juan', 30)
const persona2 = new Persona('María', 25)

persona1.saludar() // Salida: "Hola, soy Juan y tengo 30 años."
persona2.saludar() // Salida: "Hola, soy María y tengo 25 años."

/**
    En este ejemplo, hemos agregado un método llamado `saludar` al prototipo de la función
        `Persona`. Esto permite que todas las instancias de `Persona` hereden y compartan ese
        método.
**/

// Ejemplo 2: Herencia de prototipos --------------------------------------------

// Funcion animal
function Animal (nombre) {
  this.nombre = nombre
}

// agrego el metodo emitir sonidos a la funcion animal
Animal.prototype.emitirSonido = function () {
  console.log(`${this.nombre} hace un sonido.`)
}

// creo una funcion perro, con nombre y raza
function Perro (nombre, raza) {
  Animal.call(this, nombre)
  this.raza = raza
}

// Establecer la herencia del prototipo
Perro.prototype = Object.create(Animal.prototype)
Perro.prototype.constructor = Perro

Perro.prototype.emitirSonido = function () {
  console.log(`${this.nombre} (raza ${this.raza}) ladra.`)
}

const miPerro = new Perro('Rex', 'Labrador')
miPerro.emitirSonido() // Salida: "Rex (raza Labrador) ladra."

/**
    En este ejemplo, `Perro` hereda propiedades y métodos de `Animal` utilizando prototipos.
    Hemos reemplazado el método `emitirSonido` en el prototipo de `Perro` para que se
    comporte de manera diferente a la versión de `Animal`.
**/

// Ejemplo 3: Modificar propiedades en el prototipo --------------------------------------------

function Vehiculo (marca) {
  this.marca = marca
}

Vehiculo.prototype.color = 'Desconocido'

const coche = new Vehiculo('Toyota')
console.log(coche.color) // Salida: "Desconocido"

// Modificar el color en el prototipo
Vehiculo.prototype.color = 'Rojo'

console.log(coche.color) // Salida: "Rojo"

/**

    En este ejemplo, `color` es una propiedad del prototipo de `Vehiculo`. Cuando se accede a
        `coche.color`, se utiliza el valor del prototipo. Puedes modificar el valor del prototipo y
        afectará a todas las instancias de `Vehiculo`.

    Estos ejemplos ilustran cómo trabajar con prototipos para compartir métodos, heredar
        propiedades y métodos, y modificar propiedades en JavaScript. Los prototipos son una parte
        fundamental de la programación orientada a objetos en JavaScript y son útiles para crear
        código reutilizable y estructurado.

**/
