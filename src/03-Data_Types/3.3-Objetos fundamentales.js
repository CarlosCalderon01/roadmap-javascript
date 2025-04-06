/**
    1. Object:

    One of JavaScript's data types is represented by the Object class. It stores a variety of keyed collections as well as more complex entities. The Object() constructor or the object initializer / literal syntax can be used to build objects.
    A Object objects are created using the Object() constructor.
    Object operates exactly like a new Object() when invoked in a non-constructor context.
    The Object constructor constructs an object wrapper for the given value.

    When the value is null or undefined, it will create and return an empty object.
    If the value already exists as an object, it will return it.
    Otherwise, it will return an object of the value's Type.

    Properties of Object object:
    Properties      Description

    Constructor     Specifies the function that builds the prototype of an object.
    proto           This property refers to the object that was used as a prototype
                        when the object was created.

    Methods of Object object:
    Method()    Description

    assign()    Copies all enumerable own properties' values from one or more source objects to a target object.
    create()    The prototype object and its properties are used to create a new object.
    entries()   Returns an array containing all of the [key, value] pairs of the enumerable string properties of a specified object.
    freeze()    An object is frozen. Its properties can't be changed or deleted by other code.
    is()        When two values are compared, it is determined whether they are the same. All NaN values are equated in this function (which differs from both Abstract Equality Comparison and Strict Equality Comparison).
    keys()      Returns an array containing the names of all the enumerable string properties of the specified object.
    seal()      Prevents other code from deleting an object's properties.
    toString()  Returns the object's string representation.
    values()    Returns an array holding the values for all of the enumerable string properties of a specified object.

    2. Function:

    A Function object is the basis of every JavaScript function.
    A Function objects are created using the Function() constructor.
    The Function constructor is used to create functions that only run in the global scope.

    Properties of Function object:
    Properties      Description

    length          The number of arguments the function expects is specified here.
    displayName     The function's displayed name.
    caller          The function that called the one that is currently running. This property is no longer used and is only used for non-strict functions.
    name            The name of the function.
    arguments       The arguments passed to a function are represented as an array. As a Function property, this is deprecated.

    Methods of Function object:
    Method()                                    Description

    toString()                                  Returns a string containing the function's source code. Overrides the Object.prototype.toString method.
    call(thisArg[, arg1, arg2, ...argN])        This is set to the specified value when a function is called. Arguments can be passed in their current state.
    bind(thisArg[, arg1[, arg2[, ...argN]]])    Creates a new function whose this is set to the specified thisArg when it is called. If the newly-bound function is called, a given sequence of arguments can be prepended to the arguments.
    apply(thisArg [, argsArray])                ThisArg is set to the given thisArg when a function is called. Array objects can be used to pass arguments.

    3. Boolean:

    The Boolean object is a wrapper class for global objects and a member of them.
    A Boolean objects are created using the Boolean() constructor.
    It converts a non-Boolean value into a Boolean value (true or false).
    The object is set to false if it has no initial value or if it is 0, -0, null, "", false, undefined, or NaN. Otherwise, it's true (even with the string "false")

    We can create Boolean object by using below methods:

    By using Boolean Literal Notation: var bool = true;
    By using Boolean Object as Function: var bool = Boolean(true);
    By using Testable Expressions: if(true) {………….}

    Properties of Boolean object:
    Properties      Description

    Constructor     The function that created the Boolean object is returned.
    Prototype       An object’s properties and methods can be added.

    Methods of Boolean object:
    Method()    Description

    toSource()  The source of the Boolean object is returned as a string; you can use this string to create an equivalent object.
    valueOf()   The primitive value of the Boolean object is returned.
    toString()  Depending on the object's value, returns a string that is either "true" or "false."

    4. Symbol:

    Symbols are frequently used to add unique property keys to an object that won't conflict with keys added by other code and that are hidden from any mechanisms used by other code to access the object.
    A Symbol object are created using the Symbol() constructor.
    We write Symbol() with an optional string as its description to create a new primitive Symbol

    Properties of Symbol object:
    Properties      Description

    asyncIterator   A method that returns an object's default AsyncIterator.  Used by for await...of.
    hasInstance     A method for checking if a constructor object recognizes an object as an instance. Used by instanceof.
    match           A technique for determining if an object may be used as a regular expression by matching it against a string.
    species         A constructor function for creating derived objects.
    toPrimitive     A method for converting a primitive value from an object.
    unscopables     An object value whose own and inherited property names are not included in the related object's with environment bindings.
    search          The index within a string that matches the regular expression is returned by this method. Used by String.prototype.search().
    split           A method for splitting a string at indices matching a regular expression. Used by String.prototype.split().
    matchAll        A method that returns an iterator containing regular expression matches against a string. Used by String.prototype.matchAll().

    Methods of Symbol object:
    Method()    Description

    for(key)    If any existing Symbols with the specified key are identified, they are returned. If not, a new Symbol with key is created in the global Symbol registry.
    keyFor(sym) Retrieves a shared Symbol key for the specified Symbol from the global Symbol registry.
    toString()  Returns a string giving the Symbol's description. Overrides the Object.prototype.toString() method.

**/

// Object.assign(): Este método se utiliza para copiar los valores de todas las propiedades enumerables de uno o más objetos fuente en un objeto destino.

const objeto1 = { a: 1, b: 2 }
const objeto2 = { b: 3, c: 4 }
const objetoCombinado = Object.assign({}, objeto1, objeto2)

console.log(objetoCombinado)
// Resultado: { a: 1, b: 3, c: 4 }

// Object.create(): Este método se utiliza para crear un nuevo objeto con el prototipo especificado.

const prototipo = { x: 10, y: 20 }
const nuevoObjeto = Object.create(prototipo)

console.log(nuevoObjeto.x) // 10

// Object.entries(): Este método devuelve una matriz de pares clave-valor de todas las propiedades enumerables de un objeto.

const persona1 = { nombre: 'Juan', edad: 30 }
const entradas = Object.entries(persona1)

console.log(entradas)
// Resultado: [["nombre", "Juan"], ["edad", 30]]

// Object.freeze(): Este método se utiliza para hacer que un objeto sea inmutable, es decir, sus propiedades no se pueden modificar.

const persona = { nombre: 'Ana', edad: 25 }
Object.freeze(persona)

persona.edad = 26 // Esto no tendrá ningún efecto
console.log(persona.edad) // 25

// Object.is(): Este método se utiliza para comparar si dos valores son iguales. A diferencia de ===, Object.is() considera NaN igual a NaN.

console.log(Object.is(5, 5)) // true
console.log(Object.is(NaN, NaN)) // true

// Object.keys(): Este método devuelve un array de las propiedades enumerables de un objeto.

const coche = { marca: 'Toyota', modelo: 'Camry' }
const propiedades = Object.keys(coche)

console.log(propiedades)
// Resultado: ["marca", "modelo"]

// Object.seal(): Este método se utiliza para hacer que un objeto sea no extensible, lo que significa que no se pueden agregar ni eliminar propiedades, pero las propiedades existentes se pueden modificar.

const persona2 = { nombre: 'María', edad: 28 }
Object.seal(persona2)

persona2.edad = 29 // Esto está permitido
persona2.pais = 'España' // Esto no está permitido

// Object.prototype.toString(): Este método devuelve una cadena que representa el objeto. Por lo general, se utiliza el método toString() en instancias de objetos específicos, como números o fechas.

const numero = 42
console.log(numero.toString()) // "42"

// Object.values(): Este método devuelve un array de los valores de las propiedades enumerables de un objeto.

const persona3 = { nombre: 'Pedro', edad: 35 }
const valores = Object.values(persona3)

console.log(valores)
// Resultado: ["Pedro", 35]
