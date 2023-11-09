const score=200
if(score>100){
    let power="Fly"
    console.log(`User power:${power}`);  //User power:Fly =>Worked under scope 
}
// console.log(`User power:${power}`); => Not going to work out of scope 
//---------------------------------------------------------

const balance=1000
if(balance<1200)console.log("test"); //test =>Workde only in one line 

//---------------------------------------------------------
const userLoggedIn=true
const debitCard=true
if(userLoggedIn && debitCard) // If both values are true then only && will execute 
{
    console.log("Allow User to buy course"); //Allow User to buy course
}
//---------------------------------------------------------

const loggedInFromGoogle= true
const loggedInFromEmail=false
if(loggedInFromEmail || loggedInFromGoogle) //If One values are true then only || will execute 
{
    console.log("Allow user to Sign-in"); //Allow user to Sign-in
}

//-------------------------Swithc Case--------------------------------

const month=0

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("Feb");
        break;
    case 3:                     // 3rd case triggered 
        console.log("March"); //March - 
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
        

    default:console.log("Default triggered"); //Default triggered=> If value not matched with any case
        break;
}
//----------------------------- Truthy----------------------------------

const userEmailId="Hitesh@gmail.com" 

if(userEmailId) //Truthy Value if variable is not null
{
    console.log("User alowed ");
}
else{
    console.log("User not allowed ");
}

//------------------------------------------------------------------
const userId=[]
if (userId.length===0) {
    console.log("Array is empty ");//Array is empty Bcause []
}
else console.log("Array have an value"); //Array have an value , if there is any value in array


//------------------------------------------------------------------
const NewObject={}
if (Object.keys(NewObject).length===0) {
    console.log("Object is empty "); //Object is empty Because {}
}

//------------------------Nullish Coalescing Operator(??)------------------------------------------
//Nullish Coalescing Operator(??) ignores null and undefined value & It always take 1st value 
let val1;
val1=5??16
console.log(val1); //5

let val2;
val2=null??16
console.log(val2); //16

let val3;
val3=undefined??20
console.log(val3); //20

let val4;
val4=null ?? 2 ?? 34
console.log(val4); //2

//----------------------------Terinary Operator --------------------------------------
// condition?true:false

const IceTeaprice=70;// don't forgot to add semicolon
(IceTeaprice<100) ? console.log("Ice Tea is affordable") : console.log("Out of league");






