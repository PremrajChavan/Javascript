//For of loop
//Syntax For(const index of object){}

const Arr=[1,2,3,4,5]
for (const item of Arr) {
    console.log(item);
}

//---------------------------------------------------
const greetings="Hello World!"

for (const greet of greetings) {
    console.log(greet);
}
//---------------------------------------------------

//Maps 

const map=new Map();
map.set('IN','INDIA')
map.set('US','United states of america')
map.set('FR','France')
map.set('DXB','Dubai')

for (const item of map) {
    console.log(item);
}
//Otput 
//[ 'IN', 'INDIA' ]
// [ 'US', 'United states of america' ]
// [ 'FR', 'France' ]
// [ 'DXB', 'Dubai' ]

for (const [keyyy,value] of map) {
    console.log(keyyy,':-',value);
}
//---------------------------------------------------


//For in Loop

const myObject={
    Js:"Javascript",
    Java:"Java",
    HTML:"Hyper text markup language",
    CPP:"C++"
}

for (const Key in myObject) {
        // console.log(Key); //Keys - Js , Java , HTML, CPP
        // console.log(myObject[Key]); //Values - Javscript.....C++
        console.log(`${Key} shortcut is for ${myObject[Key]}`); //Js shortcut is for Javascript 
    }

//---------------------------------------------------
    //For in Loop On Array

    const programming=["Js","PHP","Ruby","Java","CPP"]

    for (const Value in programming) {
            // console.log(Value); //1,2,3,4
            console.log(programming[Value]); //js,ruby ,php
        }
    

