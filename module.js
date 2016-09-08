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
    NOTE: Not recommend.
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
    var publicVariable = 0;
    var privateArray = [];

    var _privateMethod = function(somethingOfInterest){
        privateArray.push(somethingOfInterest);
        console.log(privateArray);
    };

    var publicMethod = function(text){
        _privateMethod(text);
    };

    return {
        set publicVariable (value) {
            publicVariable = value;
        },
        get publicVariable () {
            return publicVariable;
        },
        publicMethod: publicMethod
    };
})();
Module3.publicVariable = 'New vaddlue';
console.log(Module3.publicVariable);

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
    Getters and Setters
*/
console.log("----------Getters and Setters---------");
var Module5 = (function () {

    var publicVariable = 0;

    function test () {
        return publicVariable;
    }

    return {
        set publicVariable (value) {
            publicVariable = value;
        },
        get publicVariable () {
            return publicVariable;
        },
        test: test
    }
})();

Module5.publicVariable = 'New value';
console.log(Module5.publicVariable);

/*
    More Getters and Setters
*/

var Module6 = function () {
    var name = "one";
    var setName = function(strName) {
        name = strName;
    };
    var getName = function() {
        return name;
    };

    var result = {
        setName: setName,
        getName: getName
    };

    Object.defineProperty(result, 'name', { get: getName });

    return result;
}();

Module6.setName("two");

alert("Module6.name is: " + Module6.name); // two
alert("Module6.getName() is: " + Module6.getName()); // two

/*
    Even More Getters and Setters
*/

var Module7 = function () {
    var name = "one";
    var setName = function(strName) {
        this.name = strName;
    };
    var getName = function() {
        return this.name;
    };

    return {
        name: name,
        setName: setName,
        getName: getName
    };
}();

Module7.setName("two");

alert("Module7.name is: " + Module7.name); // one
alert("Module7.getName() is: " + Module7.getName()); // two

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
