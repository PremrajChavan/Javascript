//There are two type of arrays in a javascript 1) Litral 2) Constructed

const mySym=Symbol("Key1")
const JsUser={
    name:"Hitesh","Full name":"Hitesh Choudhary",
    age:18,
    [mySym]:"Key1",
    location:"Jaipur",
    email:"hitesh@google.com",
    LoggedIn:false,
    lastLoggedIn:["Monday","Tuesday","Thursday"]
}

// console.log(JsUser["Full name"]);
//console.log(JsUser.name[1]);
console.log(JsUser[mySym]); // Print Symbol in object

JsUser.email="hitesh@chatGpt.com" // For  replace value in Object
console.log(JsUser); // Email raplaced with  email: 'hitesh@chatGpt.com',

// Object.freeze(JsUser) //use to freeze object
// JsUser.email="hitesh@Microsoft.com" //email: 'hitesh@chatGpt.com', not changed coz Object.freezed 
// console.log(JsUser); 

//------------------------Add greetings -----------------------

JsUser.greeting1=function(){
    console.log(`Hello JsUser ${this.name}`);
}
console.log(JsUser.greeting1);