
### 2. Variables in JavaScript (Variables en JavaScript)

- Variable Declarations (Declaración de variables):
    - `var`
    - `let`
    - `const`

```Javascript
var globalVar = "👎 Evita usar var";
let contador = 1;            // ✅ let: variable mutable
const PI = 3.14;             // ✅ const: valor fijo
```

- Hoisting (Elevación) **TEORICO_MEMORIZAR!**.

```Javascript
console.log(a); // undefined
var a = 5;
console.log(b); // ❌ ReferenceError
let b = 10;
```

- Variable Naming Rules (Reglas para nombrar variables) **TEORICO_MEMORIZAR!**.
    - Letras, $, _, no comenzar con número
    - Sensible a mayúsculas
    - Usa camelCase

- Variable Scopes (Ámbito de variables) **TEORICO_MEMORIZAR!**.
  - Block (Bloque)
  - Function (Función)
  - Global (Global)

```Javascript
{
  var x = 1; // global o function
  let y = 2; // block scoped
  const z = 3; // block scoped
}
console.log(x); // 1
console.log(y); // ❌ ReferenceError
```

### 3. Data Types (Tipos de datos)

Primitive Types (Tipos primitivos): **TEORICO_MEMORIZAR!**.

String, Undefined, Number, BigInt, Boolean, Null, Symbol

```Javascript
let nombre = "Carlitos";       // String
const edad = 20;             // Number
let activo = true;           // Boolean
let saldo = null;            // Null
let respuesta;               // Undefined
const id = Symbol("id");     // Symbol
const big = 123n;            // BigInt
```

- Objects (Objetos)

Un objeto es una estructura de datos no primitiva que almacena pares clave: valor.

```Javascript
let user1 = new Object(); // Sintaxis con constructor
let user2 = {};           // Sintaxis literal (más usada y recomendada)
```

- Built-in Objects (Objetos incorporados).

Los "Built-in objects" o "objetos incorporados" en JavaScript son objetos que están integrados en el propio lenguaje JavaScript y están disponibles globalmente en cualquier parte de tu código JavaScript.

```Javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
```

**Standard objects by category** (Objetos estándar por categoría)
- **Value properties** – Propiedades de valor  
- **Function properties** – Propiedades de función  
- **Fundamental objects** – Objetos fundamentales  
- **Error objects** – Objetos de error  
- **Numbers and dates** – Números y fechas  
- **Text processing** – Procesamiento de texto  
- **Indexed collections** – Colecciones indexadas  
- **Keyed collections** – Colecciones con clave  
- **Structured data** – Datos estructurados  
- **Managing memory** – Gestión de memoria  
- **Control abstraction objects** – Objetos de abstracción de control  
- **Reflection** – Reflexión  
- **Internationalization** – Internacionalización

- Object Prototypes (Prototipos de objetos); Todo objeto en JavaScript tiene una propiedad interna oculta llamada [[Prototype]], que normalmente accedes con `__proto__` o Object.getPrototypeOf(obj).

- Prototypal Inheritance (Herencia prototipal); Es el mecanismo mediante el cual los objetos en JavaScript heredan de otros objetos a través del prototipo (`__proto__`).

### 🔄 Relación

| Concepto                  | Qué es                                               |
|--------------------------|------------------------------------------------------|
| `Object Prototype`        | El objeto base del cual otro objeto hereda.         |
| `Prototypal Inheritance`  | El mecanismo que usa el motor JS para heredar.      |


- `typeof` Operator (Operador `typeof`)

El typeofoperador nos permite ver qué tipo se almacena en una variable.

```Javascript
console.log(typeof Math) // output: "object"
console.log(typeof 42) // output: "number"
console.log(typeof 'blubber') // output: "string"
console.log(typeof true) // output: "boolean"
console.log(typeof undeclaredVariable) // output: "undefined"
```

### 4. Type Casting (Conversión de tipos)

- **Type Conversion vs Coercion (Conversión de tipos vs Coerción)**  
    - **Coercion**: JS lo hace automáticamente (implícita)  
    - **Conversion**: tú lo haces manualmente (explícita)

- **Implicit Type Casting (Conversión implícita de tipos)**  
JavaScript convierte los tipos **automáticamente** según el contexto.

```javascript
console.log("5" + 1);   // "51" (Number → String)
console.log("5" - 1);   // 4   (String → Number)
console.log(true + 1);  // 2   (Boolean → Number)
console.log(null == 0); // false (pero null >= 0 es true)
```

- **Explicit Type Casting (Conversión explícita de tipos)**
El desarrollador realiza la conversión **manualmente**.

```javascript
String(123);         // "123"
Number("456");       // 456
Boolean(0);          // false
// También con operadores:
+"5"         // 5 (String a Number)
!!"hola"     // true (String a Boolean)
```

**TIP**: Siempre prefiere la conversión **explícita** para evitar bugs.

### 5. Data Structures (Estructuras de datos)

- Indexed Collections (Colecciones indexadas):
  - Arrays (Arreglos)
  - Typed Arrays (Arreglos tipados)
- Keyed Collections (Colecciones con clave):
  - `Map`
  - `WeakMap`
  - `Set`
  - `WeakSet`
- Structured Data (Datos estructurados):
  - JSON

### 6. Equality Comparisons (Comparaciones de igualdad)

- Value Comparison Operators (Operadores de comparación de valores):
  - `==`
  - `===`
  - `Object.is`
- Equality Algorithms (Algoritmos de igualdad):
  - `IsLooselyEqual`
  - `IsStrictlyEqual`
  - `SameValueZero`
  - `SameValue`

### 7. Loops and Iterations (Bucles e iteraciones)

- `while` , `do...while` , `for`
- `for...in` , `for...of` , `break` / `continue`

### 8. Control Flow (Flujo de control)

- Conditional Statements (Sentencias condicionales):
  - `if...else`
  - `switch`
- Exception Handling (Manejo de excepciones):
  - `throw` statement (Sentencia `throw`)
  - `try, catch, finally`
  - Error Objects (Objetos de error)

### 9. Expressions and Operators (Expresiones y operadores)

- Conditional Operators (Operadores condicionales)
- Comma Operators (Operadores de coma)
- Unary Operators (Operadores unarios)
- Assignment Operators (Operadores de asignación)
- Comparison Operators (Operadores de comparación)
- Arithmetic Operators (Operadores aritméticos)
- Bitwise Operators (Operadores bit a bit)
- Logical Operators (Operadores lógicos)
- BigInt Operators (Operadores de `BigInt`)
- String Operators (Operadores de cadena)

### 10. Functions (Funciones)

- Function Parameters (Parámetros de función):
  - Default Values (Valores por defecto)
  - Rest Parameters (Parámetros rest)
- Arrow Functions (Funciones flecha)
- IIFEs (Funciones inmediatamente invocadas)
- `arguments` Object (Objeto `arguments`)
- Scope & Function Stack (Ámbito y pila de funciones):
  - Recursion (Recursión)
  - Lexical Scope (Ámbito léxico)
  - Closures (Clausuras)
- Built-in Functions (Funciones incorporadas)

### 11. DOM APIs (APIs del DOM)

### 12. Strict Mode (Modo estricto)

### 13. Using `this` Keyword (Uso de la palabra clave `this`)

- in a Method (En un método)
- in a Function (En una función)
- Using it alone (Usándolo solo)
- in Event Handlers (En manejadores de eventos)
- in Arrow Functions (En funciones flecha)
- Function Borrowing (Préstamo de funciones)
- Explicit Binding (Vinculación explícita)
  - `call`
  - `apply`
  - `bind`

### 14. Asynchronous JavaScript (JavaScript asíncrono)

- `setTimeout` and `setInterval`
- Event Loop (Bucle de eventos)
- Callbacks (Funciones de retorno):
  - Callback Hell (Infierno de callbacks)
- Promises (Promesas):
  - `async/await`

### 15. Working with APIs (Trabajo con APIs)

- Using `fetch` (Uso de `fetch`)
- Using `XMLHTTPRequest` (Uso de `XMLHTTPRequest`)

### 16. Classes (Clases)

### 17. Iterators and Generators (Iteradores y generadores)

### 18. Modules in JavaScript (Módulos en JavaScript)

- ECMAScript Modules (Módulos de ECMAScript)
- CommonJS

### 19. Memory Management (Gestión de memoria)

- Memory Lifecycle (Ciclo de vida de la memoria)
- Garbage Collection (Recolección de basura)

### 20. Using Browser DevTools (Herramientas de desarrollo en el navegador)

- Debugging Issues (Depuración de problemas)
- Debugging Memory Leaks (Depuración de fugas de memoria)
- Performance Optimization (Optimización del rendimiento)
