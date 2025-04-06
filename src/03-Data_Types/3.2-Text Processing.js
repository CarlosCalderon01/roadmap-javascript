/**

    Text Processing:
        These objects represent strings and allow them to be manipulated.

    1. String:

        - In JavaScript, instances of the String object are used to represent all strings. A member of global objects, String is a wrapper class.
        - A String objects are created using the String() constructor.
        - It's used to do things like determining how long a string is, searching for specific characters inside it, extracting a substring, and so on.
        - Single quotes(' ') or double quotes(" ") are used to enclose string literals.

    Properties of String object:
    Properties      Description

    Length          The length of a string is returned.
    Constructor     The function that created the String object is returned.
    Prototype       An object's properties and methods can be added.

    Methods of String object:
    Method()                        Description

    charAt()                        The character at the specified position is returned.
    toLowerString()                 This method converts all character of a string to lowercase.
    toUpperString()                 This method converts all characters of a string to uppercase.
    concat()                        This function joins two or more strings together.
    indexOf(searchtext, index)      Searches for the provided string from the beginning of the string.
    lastIndexof(searchtext, index)  Searches for the provided string from the end of the string.
    raw()                           Returns a string constructed from a template string in its raw form.

    2. RegExp:

    The RegExp object is used to validate a character pattern.
    A RegExp objects are created using the RegExp() constructor.
    RegExp defines methods for performing powerful pattern matching and search and replace functions on text using regular expressions.
    The following methods can be used to define regular expressions.
    Using RegExp() Constructor: var RegularExpression = new RegExp(“pattern”,”flag”);
    Using Literal: var RegularExpression = /pattern/flag;
    Pattern: A string describing the regular expression's or another regular expression's pattern.
    Flag: An optional string comprising any of the "g", "I", and "m" characteristics, which respectively specify global, case-insensitive, and multiple matches.

    Properties of RegExp object:
    Properties      Description

    Constructor     The function that created the RegExp object is returned.
    Global          Checks if the "g" modifier is set.
    ignoreCase      Checks if the I modifier is set.
    lastIndex       Sets the index at which the next match will begin.
    multiline       Checks if the "m" modifier is set.
    source          The RegExp pattern's text is returned.
    sticky          Whether the search is sticky or not.
    unicode         Whether Unicode features are enabled or not.

    Methods of RegExp object:
    Method()        Description

    exec()          This function looks for a match in a string and Then first match is returned.
    test()          This function looks for a match in a string. True or false is returned.
    toSource()      The specified object is represented by an object literal.
    toString()      The regular expression's string value is returned.
    compile()       During the execution of a script, recompiles a regular expression.

    Fundamental Objects:
        These are the foundational, fundamental objects that all other objects are built upon.
        General objects, booleans, functions, and symbols are all included.

**/

// Crear una cadena de texto
const texto = 'Ejemplo de texto en JavaScript'

// charAt(): Obtener el carácter en una posición específica
const primerCaracter = texto.charAt(0) // Obtendrá "E", el primer carácter

// concat(): Concatenar cadenas
const otraCadena = ' es genial!'
const cadenaConcatenada = texto.concat(otraCadena)

// toUpperCase(): Convertir a mayúsculas
const mayusculas = texto.toUpperCase()

// toLowerCase(): Convertir a minúsculas
const minusculas = texto.toLowerCase()

// indexOf(): Encontrar la primera posición de un texto de búsqueda
const posicionPrimera = texto.indexOf('JavaScript') // Devolverá 18

// lastIndexOf(): Encontrar la última posición de un texto de búsqueda
const posicionUltima = texto.lastIndexOf('JavaScript') // Devolverá 18 (en este caso, es el mismo que indexOf)

// slice(): Extraer una porción de la cadena
const subcadena = texto.slice(8, 13) // Obtendrá "de te"

console.log(primerCaracter)
console.log(cadenaConcatenada)
console.log(mayusculas)
console.log(minusculas)
console.log(posicionPrimera)
console.log(posicionUltima)
console.log(subcadena)
