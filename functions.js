//1. How to compare two JSON have the same properties without order ?
//Given two arrays. they are
//var obj1 = {name : Person1 , age : 5}
//var obj2 = {age : 5 , name : Person1}
//Stringyfy method is used

const obj1 = {name : "Priya" , age : 5}
const obj2 = {age : 5 , name : "Priya"}
var x = JSON.stringify(obj1)===JSON.stringify(obj2)
console.log(x)