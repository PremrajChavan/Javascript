//Function is a single word shortcut of bunch of code 
function SayName(){
    console.log("P");
    console.log("R");
    console.log("E");
    console.log("M");
    console.log("R");
    console.log("A");
    console.log("J");
}
SayName()

function addTwoNumbers(number1,number2){
    console.log(number1+number2);
}
addTwoNumbers(3,4) //7

function addTwoNumbers(number1,number2) {
    let result=number1+number2
    return result
}
const result=addTwoNumbers(4,5)
console.log("Result :" , result); //Result : 9 

//--------Write function for loggin message ----

function loginMessage(username){
    if(username === undefined)
    {
        console.log("please enter valid username")
        return
    }
    return `${username} Just logged in ` 
    
}

console.log(loginMessage());


// function Login(user) {
//     if (user===undefined) {
//         console.log(`Please enter valid userId`)
//         return
//     }
//     return `${user} it's a user Id`
//     }
//     console.log(Login("123456"));// 123Abc it's a user Id

//     function nameOfState(State){
//         if(State===undefined)
//         {
//             console.log("Please use currect state name ")
//             return
//         }
//         return`${State} state name`
       
//     }
//     console.log( nameOfState("Pak"));
//--------------------------------------------------------------


function calculateCartPrice(...num1){
    return num1
}
console.log(calculateCartPrice(200,300,500,1000)); // [200, 300, 500, 1000 ] -Spread

//--------------------------------------------------------------

const user={username:"sam",
price:"150"}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}
handleObject(user) //Username is sam and price is 150 
//-----------------------------------------------------------

const myNewArray=[200,400,100,600]

function returnSecondvalue(anyValue){
 return anyValue[1]
}
console.log(returnSecondvalue(myNewArray));

//--------------------------------------------------------------

