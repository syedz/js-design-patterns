/*
    Prototype Design Pattern

    Used mainly in performance-intensive situations. The objects created are
    clones of the original object. This is basically like classes in OOP. A "constructor" in JavaScript is "just" a function that happens to be called
    with the new operator.

    The contsructor allows the creation of a single TeslaModelS object. When
    created, it will retain the states initialized in the contsructor. Additionally,
    we add the stop and go functions by declaring them with the prototype.

    Create an object prototype is to use an object constructor function.

    Prototype Property

    Every JavaScript function has a prototype property and you
    attach properties and methods on this prototype property when you want to implement
    inheritance.

    function PrintStuff (myDocuments) {
        ​this.documents = myDocuments;
    }
    ​
    ​// We add the print () method to PrintStuff prototype property so that other instances (objects) can inherit it:​
    PrintStuff.prototype.print = function () {
        console.log(this.documents);
    }

    ​// Create a new object with the PrintStuff () constructor, thus allowing this new
    object to inherit PrintStuff's properties and methods.​
    ​var newObj = new PrintStuff ("I am a new Object and I can print.");
    ​
    ​// newObj inherited all the properties and methods, including the print method,
    from the PrintStuff function. Now newObj can call print directly, even though we
    never created a print () method on it.​
    newObj.print (); //I am a new Object and I can print.

    Prototype Attribute

    The second concept with prototype in JavaScript is the prototype attribute. Think of
    the prototype attribute as a characteristic of the object; this characteristic tells
    us the object’s “parent”. In simple terms: An object’s prototype attribute points to
    the object’s “parent”—the object it inherited its properties from. The prototype
    attribute is normally referred to as the prototype object, and it is set
    automatically when you create a new object. In the example code above, newObj‘s
    prototype is PrintStuff.prototype.
*/

var TeslaModelS = function(){
    this.numWheels  = 4;
    this.manufactor = 'Tesla';
    this.make       = 'Model S';
};

// TeslaModelS.prototype.go = function(){
//     console.log("Going");
// }
//
// TeslaModelS.prototype.stop = function(){
//     console.log("Stopping");
// }
//
// console.log("---------Prototype Pattern---------");
// newTesla = new TeslaModelS();
// newTesla.go();
// newTesla.stop();

/*
    Synonymous way to extend functions on the prototype.
*/

TeslaModelS.prototype = {
    go: function() {
        console.log("Going");
    },
    stop: function() {
        console.log("Stopping");
    },
    printNumWheels: function(){
        console.log("this.numWheels: " +  this.numWheels);
    },
    prinManufactor: function(){
        console.log("this.manufactor: " + this.manufactor);
    },
    printMake: function(){
        console.log("this.make: "  + this.make);
    }
}

console.log("---------Synonymous Prototype Pattern---------");
newTesla = new TeslaModelS();
newTesla.go();
newTesla.stop();
newTesla.printNumWheels();
newTesla.prinManufactor();
newTesla.printMake();

/*
    Revealing Prototype Pattern

    Purpose of this is to maintain encapsulation and reveal certain variables
    and methods return in an object literal. JavaScript natively supports
    prototypical inheritance, no need to shield stop and go functions.
*/

// TeslaModelS.prototype = function() {
//     var go = function() {
//         console.log("Going");
//     };
//
//     var stop = function() {
//         console.log("Stopping");
//     }
//
//     return {
//         pressBrakePedal: stop,
//         pressGasPedal: go,
//         printNumWheels: function(){
//             console.log("this.numWheels: " +  this.numWheels);
//         },
//         prinManufactor: function(){
//             console.log("this.manufactor: " + this.manufactor);
//         },
//         printMake: function(){
//             console.log("this.make: "  + this.make);
//         }
//     };
// }();
//
// console.log("---------Revealing Prototype Pattern---------");
// newTesla = new TeslaModelS();
// newTesla.pressBrakePedal();
// newTesla.pressGasPedal();
// newTesla.printNumWheels();
// newTesla.prinManufactor();
// newTesla.printMake();

/*
    Prototyping example
*/

// Let's assume we have object o, with its own properties a and b:
// {a: 1, b: 2}
// o.[[Prototype]] has properties b and c:
// {b: 3, c: 4}
// Finally, o.[[Prototype]].[[Prototype]] is null.
// This is the end of the prototype chain as null,
// by definition, null has no [[Prototype]].
// Thus, the full prototype chain looks like:
// {a:1, b:2} ---> {b:3, c:4} ---> null

/*
    This won't work:

    var NewPrototype = {
        a: 1,
        b: 2
    };
*/

var NewPrototype = function() {
    this.a = 1;
    this.b = 2;
    this.doSomething = function(){
        console.log("Doing something");
    }
};

NewPrototype.prototype = {
    b: 3,
    c: 4,
    d: 5,
    doSomethingElse: function(){
        console.log("Doing something else");
    }
};

var o = new NewPrototype();

console.log("---------Prototyping Example: NewPrototype---------");
console.log(o)
console.log("o.a: " + o.a); // 1
// Is there an 'a' own property on o? Yes, and its value is 1.

console.log("o.b: " + o.b); // 2
console.log("o.[[Prototype]].b: " + o.__proto__.b); // 3
// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited.
// This is called "property shadowing"; simliar to method overriding

console.log("o.c: " + o.c); // 4
// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

console.log("o.d: " + o.d); // undefined
console.log("o.hasOwnProperty(d): " + o.hasOwnProperty('d')); // false
// Is there a 'd' own property on o? No, check its prototype.
// Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined

o.doSomething();
o.doSomethingElse();

/*
    Inheriting Methods
*/
var o = {
    a: 2,
    m: function(b){
        return this.a + 1;
    }
};

console.log("---------Inheriting Methods---------");
console.log(o.m()) // 3

var p = Object.create(o);
// p is an object that inherits from o

p.a = 4; // Create an own poperty on p
console.log(p.m()); // 5
// When p.m() is called, 'this' refers to p.
// So when p inherits the function m of o,
// 'this.a' means p.a, the own property 'a' of p


/*
    Different ways to create objects and the resulting prototype chain
*/

var o = {a: 1};

// The newly created object o has Object.prototype as its [[Prototype]]
// o has no own property named 'hasOwnProperty'
// hasOwnProperty is an own property of Object.prototype.
// So o inherits hasOwnProperty from Object.prototype
// Object.prototype has null as its prototype.
// o ---> Object.prototype ---> null

var a = ["yo", "whadup", "?"];

// Arrays inherit from Array.prototype
// (which has methods like indexOf, forEach, etc.)
// The prototype chain looks like:
// a ---> Array.prototype ---> Object.prototype ---> null

function f(){
  return 2;
}

// Functions inherit from Function.prototype
// (which has methods like call, bind, etc.)
// f ---> Function.prototype ---> Object.prototype ---> null

/*
    With a constructor
*/

var Graph = function(){
    this.vertices = [];
    this.edges    = [];
};

Graph.prototype = {
    addVertex: function(){
        this.vertices.push(v);
    }
};

console.log("---------With a Contstructor---------");
var g = new Graph();
console.log(g);
// g is an object, and has the properies 'verticies' and 'edges'
// g.[[Prototype]] is the value of Graph.prototype when new Graph() is executed.


/*
    With Object.create

    ECMAScript 5 introduced a new method: Object.create(). Calling this method creates a new object. The prototype of this object is the first argument of the function.
*/

var a = {a: 1};
// a ---> Object.prototype ---> null
console.log("---------With Object.create---------");
console.log(a);

var b = Object.create(a);
// b ---> a ---> Object.prototype ---> null
console.log(b);
console.log(b.a); // 1 (inherited)

var c = Object.create(b);
console.log(c);
// c ---> b ---> a ---> Object.prototype ---> null

var d = Object.create(null);
console.log(d);
// d ---> null
console.log(d.hasOwnProperty);
// undefined, because d doesn't inherit from Object.prototype


/*
    With the class keyword

    ECMAScript 6 introduced a new set of keywords implementing classes. Although these constructs look like those familiar to developers of class-based languages, they are not the same. JavaScript remains prototype-based. The new keywords include class, constructor, static, extends, and super.
*/

"use strict";

class Polygon {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}

class Square extends Polygon {
    constructor(sideLength) {
        super(sideLength, sideLength);
    }
    get area() {
        return this.height * this.width;
    }
    set sideLength(newLength) {
        this.height = newLength;
        this.width = newLength;
    }
}

var square = new Square(2);


/*
    Final Example
*/

var A = function(a){
    this.varA = a;
};

A.prototype = {
    varA: null,
    doSomething: function(){

    }
};

var B = function(a,b){
    A.call(this, a);
    this.varB = b;
};
B.prototype = Object.create(A.prototype, {
    varB: {
        value:        null,
        enumerable:   true,
        configurable: true,
        writable:     true
    },
    doSomething: {
        value: function(){ // override
            A.prototype.doSomething.apply(this, arguments); // call super
            // ...
        },
        enumerable: true,
        configurable: true,
        writable: true
    }
});
B.prototype.constructor = B;

console.log("---------Final Example---------");
var b = new B();
b.doSomething();
console.log(b);
