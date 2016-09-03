/*
    Prototype Design Pattern

    Used mainly in performance-intensive situations. The objects created are
    clones of the original object. This is basically like classes in OOP. A "constructor" in JavaScript is "just" a function that happens to be called
    with the new operator.

    The contsructor allows the creation of a single TeslaModelS object. When
    created, it will retain the states initialized in the contsructor. Additionally,
    we add the stop and go functions by declaring them with the prototype.

    Create an object prototype is to use an object constructor function.
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
};

NewPrototype.prototype = {
    b: 3,
    c: 4
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
// This is called "property shadowing"

console.log("o.c: " + o.c); // 4
// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

console.log("o.d: " + o.d); // undefined
// Is there a 'd' own property on o? No, check its prototype.
// Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined
