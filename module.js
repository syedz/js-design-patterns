/*
    Modules are Classes for OOP people, and they should be
    Immediately-Invoked-Function-Expressions (IIFE)
*/

// Step 1: Basic declaration...it does nothing at all
(function(){
    // private methods and variables

    return {
        // public methods and variables
    };
})();

// Step 2:
var HTMLChanger = (function(){
    // Private variable
    var contents = "contents";

    // Private method
    var changeHTML = function(){
        var element = document.getElementById('attr-to-change');
        element.innerHTML = contents;
    };

    return {
        callChangeHTML: function() {
            changeHTML();
            console.log(contents);
        }
    };
})();

console.log("---------Module Pattern---------");
HTMLChanger.callChangeHTML(); // Outputs: 'contents'
console.log(HTMLChanger.contents); // undefined

/*
    Revealing Module Pattern

    Purpose of this is to maintain encapsulation and reveal certain variables
    and methods return in an object literal.
*/
var Exposer = (function(){
    var privateVariable = 10;

    var printPrivateVariable = function() {
        console.log(privateVariable);
    };

    var privateMethod = function(){
        console.log('Inside a private method');
        privateVariable++;
    };

    var methodToExpose = function(){
        console.log('This is a method I want to expose!');
    };

    var otherMethodIWantToExpose = function(){
        privateMethod();
    };

    return {
        first: methodToExpose,
        second: otherMethodIWantToExpose,
        third: printPrivateVariable,
        getPrivateVariable: function(){
            return privateVariable
        }
    };
})();

console.log("---------Revealing Module Pattern---------");
Exposer.first();            // Output: This is a method I want to expose
Exposer.second();           // Output: Inside a private method
Exposer.third()             // Output: 11
console.log(Exposer.fourth) // undefined
Exposer.methodToExpose;     // undefined
