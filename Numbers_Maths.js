// Numbers_Maths.js

const score=400
console.log(score);

const balance =new Number(100)
console.log(balance); // [Number: 100] it's a fix number 

console.log(balance.toString()); //100 converted to string 
console.log(typeof balance); //100 converted to string

console.log(balance.toFixed(2)); //100.00 added 2 points after 100

const otherNumber=23.899
console.log(otherNumber.toPrecision(4)); //23.90 converted to precision number, if value is 23.3938 =>23.30

const hundreads=1000000
console.log(hundreads.toLocaleString()); // 1,00,000 => Converted to US standard numbers

console.log(hundreads.toLocaleString('en-IN')); //10,00,000 =>Converted to Indian standard numbers

//+++++++++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++++++++++

