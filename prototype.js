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
