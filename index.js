// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(){
    return [...drivers].slice(0,2);

}
const returnLastTwoDrivers = function(){
    return [...drivers].slice(2);
}
let selectingDrivers = []
selectingDrivers.unshift(returnFirstTwoDrivers);
selectingDrivers.push(returnLastTwoDrivers);
 
const createFareMultiplier = function(num){
    return function(){
        return num*5;
    }
}
const fareDoubler = function() {
    return function(num){
        return num*2;
    }(10)
}
const fareTripler = function() {
    return function(num) {
        return num*3;
    }(12)
}
const selectDifferentDrivers = function (arrayOfDrivers, func) {
    return func(Math.random(arrayOfDrivers));
}