/*
    Prototype Design Pattern

    Used mainly in performance-intensive situations. The objects created are
    clones of the original object.

    The contsructor allows the creation of a single TeslaModelS object. When
    created, it will retain the states initialized in the contsructor. Additionally,
    we add the stop and go functions by declaring them with the prototype.
*/

var TeslaModelS = function(){
    this.numWheels  = 4;
    this.manufactor = 'Tesla';
    this.make       = 'Model S';
};

TeslaModelS.prototype.go = function(){
    // Rotate wheels
}

TeslaModelS.prototype.stop = function(){
    // Apply brake pads
}

/*
    Synonymous way to extend functions on the prototype.
*/

TeslaModelS.prototype = {
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

TeslaModelS.prototype = function() {
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

//console.log(o.a); // 1
// Is there an 'a' own property on o? Yes, and its value is 1.

//console.log(o.b); // 2
// Is there a 'b' own property on o? Yes, and its value is 2.
// The prototype also has a 'b' property, but it's not visited.
// This is called "property shadowing"

//console.log(o.c); // 4
// Is there a 'c' own property on o? No, check its prototype.
// Is there a 'c' own property on o.[[Prototype]]? Yes, its value is 4.

//console.log(o.d); // undefined
// Is there a 'd' own property on o? No, check its prototype.
// Is there a 'd' own property on o.[[Prototype]]? No, check its prototype.
// o.[[Prototype]].[[Prototype]] is null, stop searching,
// no property found, return undefined
