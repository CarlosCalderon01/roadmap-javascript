// ----- // ----- // How to Create A Objects // ----- // ----- // ----- //

/*
    Metodo 1 - construcutor de objetos
*/
const mi_carro = new Object()

/*
    Metodo 2 - Literal de objetos o inicializador
*/

const mi_moto = {
  title: 'kazaki',
  motor: '150prd',
  valor: 140000
}

/*
    Metodo 3 - Function constructora
*/

function myBarco (name, año, precio) {
  this.name1 = name
  this.año1 = año
  this.precio1 = precio
}

const barco1 = new myBarco('remora1', 1990, 13000)
// console.log(barco1);

/*
    Metodo 4 - classes de EMSCRIPT 6 -- Estandar que usare
*/

class MyAvion {
  constructor (name, modelo, year, price) {
    this.name1 = name
    this.modelo1 = modelo
    this.year1 = year
    this.price1 = price
  }
}

const avion1 = new MyAvion('u993', 'j27', 1996, 1200000)
// console.log(avion1);

/*
    ----------------------------------------------------------------------------------------------------
    Metodo 5 - patron singleton
    // el objeto se instancia una sola vez.
    // tomando los conceptos de los Closures y las IIFE (Funciones autoejecutables) podemos crear este patrón en el cuál el objeto se instancia una única vez.
*/

// INTENTO 1 - NO RECOMENDADA
/**
    const singl = new {function Singleton(){
        this.name = 'carlos'
    }}();
**/
// no se recomeinda este metodo para crear objetos singletons
const singl = new function Singleton () {
  this.name = 'Carlos'
}()

console.log(singl)

/**
    1- Estás creando una instancia de un objeto anónimo y Singleton al mismo tiempo.
        Esto se logra mediante la creación de una función anónima inmediatamente invocada.
    2- Dentro de la función anónima, se define una propiedad name en this. La instancia de Singleton tendrá esta propiedad con el valor 'Carlos'.
    3- La instancia resultante se almacena en la variable singl.
    4- Finalmente, imprimes la variable singl en la consola.

    El código funcionará, y singl contendrá una instancia del objeto Singleton con una
        propiedad name establecida en 'Carlos'. Sin embargo, es importante tener en cuenta que
        este no es un patrón de diseño Singleton convencional en JavaScript. El enfoque más
        comúnmente utilizado para implementar un Singleton en JavaScript es como se explicó en
        respuestas anteriores, utilizando una función IIFE (Immediately Invoked Function
        Expression) para garantizar una única instancia de la clase.

**/

// INTENTO 2 - RECOMENDADA

/**
    La porción de código que has proporcionado tiene algunos errores de sintaxis y conceptuales.
        La idea detrás del código parece ser la creación de un patrón de diseño Singleton en JavaScript,
        pero la sintaxis es incorrecta.

    El patrón Singleton se utiliza para asegurarse de que una clase tenga una única instancia
        y proporciona un punto de acceso global a esa instancia.
        Aquí está cómo puedes corregir tu código para implementar un Singleton en JavaScript:
**/

const Singleton1 = (function () {
  let instance

  function init () {
    // Código para inicializar la instancia
    return {
      name: 'Carlos'
    }
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = init()
      }
      return instance
    }
  }
})()

const singleton1 = Singleton.getInstance()
const singleton2 = Singleton.getInstance()

// console.log(singleton1 === singleton2); // Esto debería imprimir true, ya que es la misma instancia

/**
    En este código:
    1- Creamos un IIFE (Immediately Invoked Function Expression) que encapsula la lógica del Singleton.
    2- Definimos una variable instance que almacenará la única instancia del Singleton.
    3- Dentro de la función init(), puedes definir cualquier propiedad o método que quieras para tu Singleton.
    4- La función getInstance comprueba si ya existe una instancia; si no existe,
        la crea llamando a init() y luego la devuelve.
    5- Al final del IIFE, retornamos un objeto que contiene el método getInstance
        para obtener la instancia del Singleton.

    Este patrón de diseño Singleton garantiza que solo haya una instancia de
        la clase Singleton y proporciona un punto de acceso global para acceder a ella.

**/

// INTENTO 3 - RECOMENDADA

const Singleton = (function () {
  let instance

  function createInstance () {
    // Cualquier lógica de inicialización que desees
    const obj = {
      name: 'Carlos',
      age: 30
    }
    return obj
  }

  return {
    getInstance: function () {
      if (!instance) {
        instance = createInstance()
      }
      return instance
    }
  }
})()

// Para obtener la instancia del Singleton:
const singletonInstance1 = Singleton.getInstance()
const singletonInstance2 = Singleton.getInstance()

// Comprobamos si son la misma instancia
// console.log(singletonInstance1 === singletonInstance2); // Esto debería imprimir true

// Modificar la instancia
singletonInstance1.name = 'Juan'

// Verificar que el cambio se refleja en la instancia compartida
// console.log(singletonInstance2.name); // Esto imprimirá "Juan"

/**
    1- Definimos el patrón Singleton como un IIFE que encapsula la lógica.
    2- La función createInstance se encarga de crear el objeto que deseamos que sea una instancia única.
    3- La función getInstance verifica si ya existe una instancia y, si no, la crea llamando a createInstance.
    4- Luego, podemos obtener la instancia del Singleton llamando Singleton.getInstance().

    Ten en cuenta que, en este patrón Singleton, singletonInstance1 y singletonInstance2
    hacen referencia a la misma instancia del objeto, por lo que cualquier cambio en una de ellas
    se reflejará en la otra, como se muestra en el ejemplo al modificar el nombre en
    singletonInstance1 y verificando que el cambio se refleja en singletonInstance2.
    Esto demuestra que realmente estás trabajando con una única instancia compartida.

**/
