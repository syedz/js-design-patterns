"use strict"

/*
    Example 1
*/

var allUserData = [];

function logStuff(lastName, userData){
    if (typeof userData === "string") {
        console.log(userData + " " + lastName);
    }
    else if (typeof userData === "object") {
        console.log(lastName);
        for (var item in userData) {
            console.log(item + ":" + userData[item])
        }
    }
};

function getInput(options, callback){
    allUserData.push(options);
    var lastName = "Clinton";

    if (typeof callback === "function") {
        callback(lastName, options);
    }
}

/*
    Example 2
*/

getInput({name: "Rich", speciality: "JavaScript"}, logStuff);

var clientData = {
    id: 902323,
    fullName: "Not set",
    setUserName: function(firstName, lastName){
        this.fullName = firstName + " " + lastName;
        // Have to turn off strict mode to see the message
    }
};

function getUserInput(firstName, lastName, callback, callbackObj){
    // Look at where it's being called from; global scope
    callback.apply(callbackObj, [firstName, lastName]);
    // Can also do this
    // callback.call(callbackObj, firstName, lastName);
}

getUserInput("Barack", "Obama", clientData.setUserName, clientData);
console.log(clientData.fullName); // Not set
console.log(window.fullName); // Barack Obama
