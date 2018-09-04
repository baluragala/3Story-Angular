"use strict";
// function makeName(first: string, last: string): any {
//   return first + " " + last;
// }
// let fullName = makeName("bala", "krishna");
// console.log(makeName("bala", "krishna"));
//optional parameters
function makeName(first, last, title) {
    if (title !== undefined) {
        return title + "." + first + " " + last;
    }
    return first + " " + last;
}
var fullName = makeName("bala", "krishna", "mr");
console.log(fullName);
//es6 default paramaters
function makeName1(first, last, title) {
    if (title === void 0) { title = "mr"; }
    if (title !== undefined) {
        return title + "." + first + " " + last;
    }
    return first + " " + last;
}
var fullName1 = makeName1("bala", "krishna");
console.log(fullName1);
//es6 Arrow functions
var makeName2 = function (first, last, title) {
    if (title === void 0) { title = "mr"; }
    if (title !== undefined) {
        return title + "." + first + " " + last;
    }
    return first + " " + last;
};
//
var numbers1 = [10, 20, 30, 40, 50];
numbers1.filter(function (n) {
    return n > 30;
});
numbers1.filter(function (n) { return n > 30; });
// this is auto bind
function Person(name1, age) {
    var _this = this;
    this.name1 = name1;
    this.age = age;
    this.describe = function () {
        return "Name : " + _this.name1 + ", \n    \n    \n    \n    Age: " + _this.age;
    };
}
var p1 = new Person("Zeolearn", 32);
var describeRef = p1.describe;
console.log(describeRef());
