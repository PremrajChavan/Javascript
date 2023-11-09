//Syntax - new Promise(funcion(resolve,reject){})

// const promiseOne= new Promise(function(reject,resolve){
//     setTimeout(function(){
//         console.log("Async task is completed");
//         resolve();
//     },1000)
// });
// promiseOne.then(function(){
//     console.log("Promise Consumed ");
// })

async function getAllusers() {
   try{
    const response= await fetch('https://api.github.com/users/hiteshchoudhary')
    console.log(response);
    const data=await response.json()
    console.log(data);
   }catch(error){
    console.log("E:",error);
 }
 } 
