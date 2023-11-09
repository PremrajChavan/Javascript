//For loop 

for (let i = 0; i <= 10; i++) {
    const element = i;
    console.log(i);  
}
//-------------------------------------------------

for (let index = 0; index < 20; index++) {
    if(index==5){
 console.log(`Detected 5`);
 break // Will stop the execution 
    }
    console.log(`value of i is ${index}`);
    
    
}
//-------------------------------------------------

for (let index = 0; index < 20; index++) {
    if(index==5){
 console.log(`Detected 5`);
 continue // Will continue the execution 
    }
    console.log(`value of i is ${index}`);
    
    
}


let Arr=0;
while (Arr<=10) {
    console.log(Arr);
    Arr++
}

Array=["tom","sam","zplu"]

let A=0;
while (A<Array.length) {
    console.log(Array[A])
    console.log(Array.keys["tom"]);
    A++
    
}

let score=1;
do {
    console.log(score);
    score++
} while (score<=12);


const Arr1=[12,34,56,77,89,76]
let QBC=0
do {
    console.log(Arr1[QBC]);
    QBC++
    console.log(QBC);
} while (QBC<Arr1.length);