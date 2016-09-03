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

    var getPrivateVariable = function() {
        return privateVariable;
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
        fourth: function(){
            getPrivateVariable()
        }
    };
})();

console.log("---------Revealing Module Pattern---------");
Exposer.first();            // Output: This is a method I want to expose
Exposer.second();           // Output: Inside a private method
Exposer.third()             // Output: 11
console.log(Exposer.fourth) // Output: the function literal
Exposer.methodToExpose;     // undefined


/*
    Prototype Design Pattern

    Used mainly in performance-intensive situations. The objects created are
    clones of the original object.

    The contsructor allows the creation of a single TeslaMOdelS object. When
    created, it will retain the states initialized in the contsructor. Additionally,
    we add the stop and go functions by declaring them with the prototype.
*/

var TeslaMOdelS = function(){
    this.numWheels  = 4;
    this.manufactor = 'Tesla';
    this.make       = 'Model S';
};

TeslaMOdelS.prototype.go = function(){
    // Rotate wheels
}

TeslaMOdelS.prototype.stop = function(){
    // Apply brake pads
}

/*
    Synonymous way to extend functions on the prototype.
*/

TeslaMOdelS.prototype = {
    go: function() {
        // Rotate wheels
    },
    stop: function() {
        // Apply brake pads
    }
}

/*
    Revealing Prototype Pattern

    Purpose of this is to maintain encapsulation and reveal certain variables
    and methods return in an object literal.
*/

TeslaMOdelS.prototype = function() {
    var go = function() {
        // Rotate wheels
    };

    var stop = function() {
        // Apply brake pads
    }

    return {
        pressBrakePedal: stop,
        pressGasPedal: go
    };
}();
