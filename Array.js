// concat array 

// const Array1 = [1,2,3,4,5];
// const Array2 = [5,6,7,8,9,10];
// const Array3 = [0,0,0];
// const Array4 = [1,3,9,19];
// const concatAll = Array1.concat(Array2, Array3,Array4)
// console.log(concatAll)

const myArr=[0,1,2,3,4,5] 
// console.log(myArr);
const myArr1=new Array(1,2,3,4,5)//another way to declare array 
// console.log(myArr1);

myArr1.push('8'); 
// console.log(myArr1) //[ 1, 2, 3, 4, 5, '8' ] It will push one value which u have added in braces

myArr1.pop(); 
// console.log(myArr1) //[ 1, 2, 3, 4, 5 ] It will remove last value 

myArr.unshift(9)
//console.log(myArr);//[9,0,1,2,3,4,5] - It will ad value in front of an array 

myArr.shift() 
// console.log(myArr);//[ 0, 1, 2, 3, 4, 5 ] It will remove 1st element 

console.log(myArr.includes(4)); //true - It will search value in Array 

console.log(myArr.indexOf(5)); // 5 - It will show index number 

//------------------------------Convert Array to String ---------------------

const newArr=myArr.join()
// console.log(myArr); //[ 0, 1, 2, 3, 4, 5 ] original array 
// console.log(newArr); // 0,1,2,3,4,5 => Array converted to string  

//------------------------------Slice and Splice  ---------------------------

console.log("A",myArr); // A [ 0, 1, 2, 3, 4, 5 ] => use quama after String =>Original array
const myN1=myArr.slice(1,3)

console.log(myN1);
console.log("B",myArr);// After Slice Original array Won't change 

const myN2=myArr.splice(1,3);
console.log(myN2); // [ 1, 2, 3 ] =>Spliced array 

console.log(myArr);//[ 0, 4, 5 ] Original array after Splice 


//----------------Concat & Spread----------------

const marvel_heros =["SpiderMan","IronMan","Thor"]
const dc_heros =["SuperMan","Flash","BatMan"]

// console.log(marvel_heros +" , "+ dc_heros);

const allHeros=marvel_heros.concat(dc_heros)// Concat 2 or more arrays 
console.log(allHeros);

const AllNewHeros=[...marvel_heros,...dc_heros]// using Spread Concat 2 or more arrays
console.log(AllNewHeros); 

const AnotherArray=[1,2,3[4,5,6],7,[6,7[4,5]]]
const real_Another_Array=AnotherArray.flat(Infinity)
console.log(real_Another_Array);



// -----cobert Striing to Array

console.log(Array.from("Hitesh")); //[ 'H', 'i', 't', 'e', 's', 'h' ] - Converted to Array

let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3)); // Array.of() => [ 100, 200, 300 ] Helps to convert values into array

console.log(Array.isArray("Hitesh")); //false =>It will check if this array present in page or not 
console.log(Array.isArray(AnotherArray)); //true =>It will check if this array present in page or not 





