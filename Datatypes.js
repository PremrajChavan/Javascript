 "Use strict";  //to treat all Js code as newer version   
//  alert("Hello")   We are using NodeJS not browser ,alert is defined in browser only 

console.log(3+3);
console.log("Premraj");

let name = "Premraj" //String => Always declare in double cote ""
let age=21          //number =>2 to power of 53 //bigint => If your number is larger then use bigint 
let isLoggedIn = true //boolean only contain Yes or No means True or false 
let state = null //null => Standalone Value "Representation of Empty value"
let a= undefined // undefined => Yet to assign value

console.log(typeof name);
console.log(typeof age);
console.table([name,age,isLoggedIn,state,a])

const id=Symbol('123')
const anotherID=Symbol('123')

console.log(id === anotherID);
// console.log(anotherID);

let bigNumber=333446525353647746499777655433222n;
console.log(typeof bigNumber);

