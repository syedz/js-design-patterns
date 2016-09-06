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
console.log(Exposer); // The object literal
console.log("---------Revealing Module Pattern---------");
Exposer.first();            // Output: This is a method I want to expose
Exposer.second();           // Output: Inside a private method
Exposer.third()             // Output: 11
console.log(Exposer.getPrivateVariable) // Output: the function literal
Exposer.methodToExpose;     // undefined


/*
    Locally Scope Object Literal

    Easier to see which methods are public and which are private when you have
    long file.
*/
var Module1 = (function(){

     // Locally scoped object
     var myObject = {};

     // Declared with `var`, must be "private"
     var _privateMethod = function() {};

     myObject.someMethod = function() {
         // Public method
     };

     return myObject;
})();

/*
    Another way of doing it.
    NOTE: Not recommend;
*/
var Module2 = (function(){

     var _privateMethod = function() {};

     var myObject = {
         someMethod: function() {},
         anotherMethod: function() {}
     };

     return myObject;
})();

/*
    Accessing Private Methods, Objects, Arrays, and everything else
*/
var Module3 = (function(){

    var privateArray = [];

    var _privateMethod = function(somethingOfInterest){
        privateArray.push(somethingOfInterest);
        console.log(privateArray);
    };

    var publicMethod = function(text){
        _privateMethod(text);
    };

    return {
        publicMethod: publicMethod
    };
})();
Module3.publicMethod('Hello');

/*
    Augumenting Modules

    Extending modules and including another smaller Module.
*/
var Module4 = (function(){

    var _privateMethod = function() {
        // private
    };

    var someMethod = function() {
        // public
    };

    var anotherMethod = function(){
        // public
    };

    return {
        someMethod:    someMethod,
        anotherMethod: anotherMethod
    };
})();

// So far our Object Module looks like this:
// Object {someMethod: function, anotherMethod: function}

// We want to add our Module extension, so it ends up having another public method,
// like this:
// Object {someMethod: function, anotherMethod: function, extension: function}

var Module4Two = (function(Module4){
    // access to `Module`

    Module4.extension = function() {
        // another method
    };

    return Module4;

})(Module4 || {});

console.log(Module4);
console.log(Module4Two);
// Both will be the same

/*
    Employee Example
*/

console.log("----------Employee Example---------");
var Employee = (function(){
    var firstName = "John";
    var lastName = "Smith";

    return {
        getFirstName: function(){
            return firstName;
        },
        getLastName: function(){
            return lastName;
        }
    };
})();

// console.log(Employee.getFirstName);
