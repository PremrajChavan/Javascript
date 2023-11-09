// node Js/FilterMapReduce.js

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums=myNums.filter((num)=>num>4) //[ 5, 6, 7, 8, 9, 10 ] =>You will get value which condition u have provided 
// console.log(newNums);

const newNums = myNums.filter((num) => { return num > 4 }) //[ 5, 6, 7, 8, 9, 10 ] for multiple values U have to use return while assigning in Curly braces 
console.log(newNums);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

//   let MyBooks=books.filter((bk)=>bk.genre==='History')
//   console.log(MyBooks);

//   let YourBooks=books.filter((bk)=>bk.publish>=2000)
//   console.log(YourBooks);

// let Mybooks=books.filter((bk)=>{return bk.publish>=200 && bk.genre==='History'})
// console.log(Mybooks);


//map

const myNumbers=[1,2,3,4,5,6,7,8,9,10]

const newNums1=myNumbers.map((num)=>num+1)   
console.log(newNums1);

 //OutPut    [
//           2, 3, 4,  5,  6,
//           7, 8, 9, 10, 11
//           ]

const newNums2=myNumbers
.map((num)=>num*10)
.map((num)=>num+1)
.filter((num)=>num>=40) // Filter needs to add on last 
console.log(newNums2);

// [
//     41, 51,  61, 71,
//     81, 91, 101
// ]

const myNum=[1,2,3]

const myTotal=myNum.reduce((acc,current)=>acc+current,0) //6 =>it will add all array values 
console.log(myTotal);

//Cart add

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const MyCart=shoppingCart.reduce((acc,item)=>item.price+acc,0)

console.log(MyCart);//22996 - total of cart price


const MyItemName=shoppingCart.reduce((acc,item)=>{return item.itemName
},0)
console.log(MyItemName); //data science course