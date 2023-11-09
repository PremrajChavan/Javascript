function createUser(username,score) {
    this.username=username
    this.score=score
    console.log(username,score);
}
createUser.prototype.increament=function(){
    this.score++
    
}
createUser.increament
const chai =createUser("chai",25)
const Prem=createUser("Prem",22)

// console.log(createUser.increament);


//create method to remove unnecessory space & values from array 
let myName="Premraj       "//14
let myCountry="India          " //15

// console.log(myName.length);
// console.log(myCountry.length);

String.prototype.trueLength=function(){
    console.log(`True length is ${this.trim().length}`);
}
const MM="Sakinaka        "

console.log(MM.trueLength());
console.log(MM.length);
