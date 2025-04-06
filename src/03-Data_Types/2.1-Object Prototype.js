/**
    Claro, puedo explicarte lo que significa el concepto de "Prototypes" en JavaScript.
    JavaScript es un lenguaje de programación orientado a objetos construido en torno a un
    modelo de prototipos. En lugar de usar clases tradicionales como en algunos otros lenguajes
    de programación orientados a objetos, JavaScript utiliza prototipos como su mecanismo
    fundamental para la herencia y la reutilización de propiedades y métodos.

    Aquí hay algunas ideas clave sobre los prototipos en JavaScript:

    1. **Herencia basada en prototipos**: Cada objeto en JavaScript tiene un prototipo (también
        conocido como "proto") del cual hereda propiedades y métodos. Los prototipos forman una
        cadena, y los objetos pueden heredar propiedades y métodos de múltiples prototipos en una
        cadena.

    2. **Objetos y sus prototipos**: Cuando intentas acceder a una propiedad o método en un objeto,
        JavaScript buscará primero en el propio objeto. Si no encuentra la propiedad o método en el
        objeto, buscará en el prototipo del objeto. Esta búsqueda continúa a lo largo de la cadena de
        prototipos hasta encontrar la propiedad o método deseado o hasta llegar al final de la cadena.

    3. **Object.prototype**: En JavaScript, el objeto base de todos los objetos es `Object.prototype`.
        Todos los objetos heredan algunas propiedades y métodos básicos de este prototipo, como
        `toString`, `hasOwnProperty`, etc.

    4. **Creación de prototipos personalizados**: Puedes crear tus propios objetos y definir
        prototipos personalizados para ellos. Esto te permite extender las propiedades y métodos
        de los objetos según tus necesidades.

    5. **Herencia y reutilización de código**: Los prototipos permiten la reutilización de código y la
        implementación de la herencia en JavaScript. Puedes definir un objeto con propiedades y
        métodos comunes y luego crear otros objetos basados en él que hereden esas propiedades
        y métodos.

**/

/**
    La elección de si manipular objetos a través de prototipos o directamente en el objeto
        depende del contexto y de tus necesidades específicas. Ambos enfoques tienen sus ventajas
        y desventajas, y la elección dependerá de la situación particular en la que te encuentres.

    Aquí hay algunas consideraciones que te pueden ayudar a decidir cuál método utilizar:

    1. **Modificación directa del objeto**: Manipular un objeto directamente puede ser más simple y
        directo en muchos casos. Si solo necesitas agregar, modificar o eliminar propiedades o
        métodos específicos en un objeto, hacerlo directamente en el objeto es generalmente más
        sencillo y legible.

    2. **Prototipos para propiedades compartidas**: Si deseas que varias instancias de un objeto
        compartan propiedades o métodos comunes, es más eficiente y lógico definir esas
        propiedades o métodos en el prototipo. Esto ahorra memoria ya que las propiedades
        compartidas se almacenan una vez en el prototipo en lugar de duplicarse en cada instancia.

    3. **Encapsulación y herencia**: Si estás trabajando en un sistema más orientado a objetos y
        necesitas implementar herencia y encapsulación, entonces definir propiedades y métodos
        en el prototipo es útil. Esto permite que las instancias hereden comportamientos de un
        prototipo común.

    4. **Flexibilidad vs. Seguridad**: Manipular directamente un objeto puede ser más flexible, pero
        también puede llevar a errores si no tienes un buen control sobre las modificaciones. Usar
        prototipos puede proporcionar una estructura más segura y controlada para definir
        propiedades y métodos comunes.

    5. **Código mantenible**: En proyectos grandes y complejos, es común utilizar una combinación
        de ambos enfoques. Definir propiedades y métodos compartidos en el prototipo y luego
        modificar propiedades específicas en instancias individuales para adaptarlas a necesidades
        particulares puede hacer que tu código sea más mantenible y escalable.

    En resumen, no hay un enfoque "mejor" en todos los casos. La elección entre manipular
        objetos a través de prototipos o directamente en el objeto dependerá de la estructura de tu
        código, tus necesidades específicas y la legibilidad del código. Es importante comprender
        ambos enfoques y saber cuándo es apropiado utilizar cada uno para escribir código limpio
        y efectivo.

**/

// TESTING CODE 1 - PROTOTYPE SIMPLE

const animal = {
  eats: true
}

function Rabbit (name) {
  this.name = name
}

Rabbit.prototype = animal

const rabbit = new Rabbit('White Rabbit') //  rabbit.__proto__ == animal

alert(rabbit.eats) // true
