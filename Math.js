console.log(Math); //Object Math
console.log(Math.abs(-4)); // 4 Converted to postive number 

console.log(Math.round(4.5)) //5 Provide greater value if number is more than 0.5
console.log(Math.round(4.3)); //4 Provide lesser value if number is less than 0.5

console.log(Math.ceil(4.2)); //5 if number value is more than 0.1 it will show larger value 

console.log(Math.floor(4.9)); // 4 lowest value

console.log(Math.min(4,3,5,8)); //3 Lowest value in Array 
console.log(Math.max(4,3,5,8)); //8 Largest Value 

console.log(Math.random()); //Always shows 0-1 value in points =>0.123
console.log(Math.random()*10); //Always shows 0-10 value in points =>1.123
console.log(Math.random()*10+1);//Always shows 1-10 value in points =>1.123

const min=10
const max=20

console.log(Math.floor(Math.random()*(max-min+1))+min) //14 this formula always give greater than min value which you can edit 