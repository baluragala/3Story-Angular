"use strict";
var username = "John";
var age;
age = 20;
var isWorking = true;
var friends;
friends = ["Lina", "Anna", "Wili"];
var friends1;
friends = ["Lina", "Anna", "Wili"];
var features = { feat1: true };
console.log(username, age, isWorking, friends, features);
//enums
var Status;
(function (Status) {
    Status[Status["Started"] = 1000] = "Started";
    Status[Status["InProgress"] = 2000] = "InProgress";
    Status[Status["Completed"] = 3000] = "Completed";
})(Status || (Status = {}));
var status1 = Status.InProgress;
console.log("status1", status1);
console.log("status", Status[2000]);
//union
var state;
state = 10;
state = "IN TRANSIT";
//any
var canHoldAnything;
canHoldAnything = 10;
canHoldAnything = "string";
//void
//tuple
var pair = ["key", 10, -9, false];
console.log(pair);
console.log(pair[0], pair[1]);
