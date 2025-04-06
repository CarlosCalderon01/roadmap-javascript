/*

    son datos que no son un objeto y no tienen métodos ni propiedades . Hay 7 tipos de datos primitivos:

    Data Type

        undefined, null, boolean, number, bigint, string, Symbol


    son datos que no son un objeto y no tienen métodos ni propiedades . Hay 7 tipos de datos primitivos:

    Hay 8 tipos de datos básicos en JavaScript.
        Siete tipos de datos primitivos:

            "number" para números de cualquier tipo: enteros o de punto flotante, los números enteros están limitados por .±(253-1)
            "bigint" para números enteros de longitud arbitraria.
            "string" para cuerdas. Una cadena puede tener cero o más caracteres; no existe un tipo de carácter único independiente.
            "boolean" para true/ false.
            "null" para valores desconocidos: un tipo independiente que tiene un único valor null.
            "undefined" para valores no asignados: un tipo independiente que tiene un único valor undefined.
            "symbol" para identificadores únicos.

*/

/**
    number -> representa números enteros y de coma flotante.

    “valores numéricos especiales”: Infinity, -Infinityy NaN.
        el tipo "número" no puede representar de forma segura valores enteros mayores que (253-1)9007199254740991-(253-1)
                console.log(9007199254740991 + 1); // 9007199254740992
                console.log(9007199254740991 + 2); // 9007199254740992

    Un BigIntvalor se crea añadiendo nal final de un número entero:
        // the "n" at the end means it's a BigInt
        const bigInt = 1234567890123456789012345678901234567890n;
*/
    console.log(9007199254740991 + 1); // 9007199254740992
    console.log(9007199254740991 + 2); // 9007199254740992

//-----//-----//-----//-----//-----//-----//-----//-----//-----//

/**
    string -> Una cadena en JavaScript debe estar entre comillas.
        
        let str = "Hello";
        let str2 = 'Single quotes are ok too';
        let phrase = `can embed another ${str}`;

    En JavaScript, existen 3 tipos de comillas.

        Comillas dobles === Comillas simples
        Comillas dobles: "Hello"
        Comillas simples: 'Hello'.

        Comillas invertidas: `Hello`. --> Las comillas invertidas son comillas de “funcionalidad extendida”

*/

//-----//-----//-----//-----//-----//-----//-----//-----//-----//

/**
    Booleano --> El tipo booleano tiene sólo dos valores: truey false.
    + Los valores booleanos también surgen como resultado de comparaciones
    + Hay cuatro operadores lógicos en JavaScript: ||(O), &&(Y), !(NO), ??(Coalescencia nula). 
*/

let isGreater = 4 > 1;
alert(isGreater); // true (the comparison result is "yes")

//-----//-----//-----//-----//-----//-----//-----//-----//-----//

/**
    Null ->
    + no pertenece a ninguno de los tipos descritos anteriormente.
    + Forma un tipo independiente propio que contiene sólo el null valor
    + En JavaScript, nullno es una "referencia a un objeto inexistente" o un "puntero nulo" como en otros lenguajes.
*/

//-----//-----//-----//-----//-----//-----//-----//-----//-----//

/**
    undefinedDestaca -> El significado de undefinedes “valor no asignado”.
    + Si una variable está declarada, pero no asignada, entonces su valor es undefined

*/



