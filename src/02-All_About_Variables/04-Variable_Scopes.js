/** 
    --> A-) All About Variables
            4. Variable Scopes
                4.1 block
                4.2 function
                4.3 Global
**/

/*
    4. Variable Scopes
        // block, function, Global

        https://miro.medium.com/v2/resize:fit:720/format:webp/0*mYuuRwjUfUOAdHpo.jpg

        Tipo    estado del contener     acceso al cambio
        var     box name apple          box swap later
        let     box apple with shield   Box apple swap only in shield
        const   box

    JavaScript has 3 types of scope:

        Block scope
        Function scope
        Global scope - Global JavaScript Variablese

    Scope determines the accessibility (visibility) of variables.

        Block Scope --> Let, Const {}
            Variables declared inside a { } block cannot be accessed from outside the block:

        Local Scope -->
            Variables declared within a JavaScript function, become LOCAL to the function.

        Function Scope -->

            + JavaScript has function scope: Each function creates a new scope.
            + Variables defined inside a function are not accessible (visible) from outside the function.
            + Variables declared with var, let and const are quite similar when declared inside a function.

            They all have Function Scope:

        Global Scope

            + A variable declared outside a function, becomes GLOBAL.
            + Variables declared Globally (outside any function) have Global Scope.
            + Global variables can be accessed from anywhere in a JavaScript program.
            + Variables declared with var, let and const are quite similar when declared outside a block.

    They all have Global Scope:

        JavaScript Variables

            In JavaScript, objects and functions are also variables.

        Automatically Global

            + If you assign a value to a variable that has not been declared,
                it will automatically become a GLOBAL variable.

            + This code example will declare a global variable carName,
                even if the value is assigned inside a function.

*/



