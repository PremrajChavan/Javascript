let myDate=new Date()
console.log(myDate); // 2023-10-08T17:01:18.666Z -it will show current date and time in this format

console.log(myDate.toString());// Sun Oct 08 2023 22:32:35 GMT+0530 (India Standard Time) - Convert to String Date 
console.log(myDate.toDateString()); //Sun Oct 08 2023 gave real date with String 
console.log(myDate.toLocaleString()); // 10/8/2023, 10:36:23 PM - For seperate date and time use LocalString 


console.log(typeof myDate);//Object Date is Object always 

//---------------------------------------------------------Declare any Specific date 

let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toDateString()); //Mon Jan 23 2023 - toDateString gave value in this format 
console.log(myCreatedDate.toLocaleDateString()); //1/23/2023 - The date we prefer Local Date 

//-------------Time and Date in one line ---------

let myCreatedDate1=new Date(2023,0,23,5,3)//add value as per requirement 
console.log(myCreatedDate1.toLocaleString()); //1/23/2023, 5:03:00 AM 

let myCreatedDate2=new Date("01-14-2023");
console.log(myCreatedDate2.toLocaleString()); // 1/14/2023, 12:00:00 AM Specific time as per requirement 

//--------------------getTime()--------------------

let myCreatedDate3=new Date("01-14-2023")
let myTimeStamp=Date.now()
console.log(myTimeStamp); //1696786641771  date in miliseconds 
console.log(myCreatedDate3.getTime()); //1673634600000  date in miliseconds 

let newDate =new Date()
console.log(newDate); //2023-10-08T17:46:52.113Z Current Date and Time
console.log(newDate.getDate());// 8 for specific Date 
console.log(newDate.getDay());// 0 for specific Date 
console.log(newDate.getFullYear());// 2023 for specific year
console.log(newDate.getMinutes());// 19 for specific minute

