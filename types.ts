var username: string = "John";
var age: number;
age = 20;
var isWorking: boolean = true;

var friends: string[];
friends = ["Lina", "Anna", "Wili"];

var friends1: Array<string>;
friends = ["Lina", "Anna", "Wili"];

var features = { feat1: true };

console.log(username, age, isWorking, friends, features);

//enums

enum Status {
  Started = 1000,
  InProgress = 2000,
  Completed = 3000
}

var status1: Status = Status.InProgress;
console.log("status1", status1);
console.log("status", Status[2000]);

//union
var state: number | string | boolean | Array<number>;
state = 10;
state = "IN TRANSIT";

//any
var canHoldAnything: any;
canHoldAnything = 10;
canHoldAnything = "string";

//void

//tuple

var pair: [string, number, number, boolean] = ["key", 10, -9, false];
console.log(pair);
console.log(pair[0], pair[1]);
