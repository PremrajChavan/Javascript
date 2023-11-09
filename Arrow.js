const user={
    username:"hitesh",
    price:999,
    welcomeMassage: function(){
        console.log(`${this.username} welcome to website`);
    }
}
user.welcomeMassage() // hitesh welcome to website

//---------------------------------------------------------

function chai(){
    let username="hitesh"
    console.log(this.username);
}
chai() //Undefined 
//---------------------------------------------------------

const chai1= function(){
 let username="hitesh"
 console.log(this.username);
}
chai1() //Undefined 
//---------------------------------------------------------

const chai2=function(){
    let username="Hitesh"
    console.log(this.username);
}
chai2()//Undefined 
//---------------------------------------------------------

const chai3=()=>{
    let username="hitesh"
    console.log(this.username);
}
chai3() //Undefined 
//---------------------------------------------------------
const addTwo=(num1,num2)=>
{
    return num1+num2
}
console.log(addTwo(3,4)); //7
//---------------------------------------------------------

const addTwo1=()=>({username:"Hitesh"})
console.log(addTwo1()); //{ username: 'Hitesh' }
//---------------------------------------------------------
let B=19
let A=21
// const Arr=Array.of(B,A)
// console.log(Arr);
const ChaiOrcode = (num1,num2)=>(num1+num2)
console.log(ChaiOrcode(A,B)); //40 you don't need to hold arrow function in variable 
//---------------------------------------------------------
//IIFE
(function ChaiMasala(){
    console.log(`DB Connected`);
})(); //DB Connected Fast Execution ; Dont forgot to add (;) 

(function ChaiMasala(){
    console.log(`DB Connected TWO`);
})(); //DB Connected TWO

//---------------------------------------------------------
// IIFE in ARROW

((name)=>{
    console.log(`DB CONNECTED TWO 1${name}`);
})('Hitesh'); //DB CONNECTED TWO 1Hitesh
//---------------------------------------------------------



const cnema= (num1,num2)=>(num1+num2)
console.log(cnema(2,3)); //5
