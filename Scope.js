let a=300;
if(true)
{
    let a=10;
    const b=200;
    console.log("INSERT :" +a); // INSERT :10 Block Scope 
}

console.log(a);//300 -Global Scope 

function one(){
    const username="Hitesh"
    function two(){
        const website=" Youtube"
        console.log(username); //Hitesh - Child can access parent value but parent can't access child's value
    }
    // console.log(website);
    two()
}
one()

//--------------------------------------------------------

if(true)
{
    const username="Hitesh"
    if(username==="Hitesh"){
        const website=" Youtube"
        console.log(username+website); //Hitesh Youtube =>Printed 
    }
    // console.log(website); // parent can't access childs value
}
// console.log(username);// This is out of scope 

//--------------------------------------------------------

console.log(addOne(5)); //6

function addOne(num){
    return num + 1
}

// addTwo(5)
const addTwo=function(num){
    return num +2
}

//--------------------------------------------------