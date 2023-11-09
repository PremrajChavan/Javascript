// There are Two ways to define object 

//1) Singleton 

// const tinderUser=new Object()
// console.log(tinderUser[0]);

//2) Constructed

const tinderUser={}
tinderUser.id="123abc"
tinderUser.name="sam"
tinderUser.isLoggedIn=false

console.log(tinderUser); // { id: '123abc', name: 'sam', isLoggedIn: false } 

const regularUser={email:"someone@gmail.com",
fulname:{userFullname:{firstName:"hitesh", lastName:"Choudhary"}}
}
console.log(regularUser.fulname.userFullname.firstName); //hitesh -u need to assign like this to get proper answer 

//--------------------------Combine or concat Object -----------------

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}

const obj3=Object.assign({},obj1,obj2)
console.log(obj3); //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } => Combined 

//-----Combined with spread----------------------

const obj4={...obj1,...obj2}
console.log(obj4) //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' } => Combined via Spread

//=--------------get Keys of any Object ----------

console.log(tinderUser); //{ id: '123abc', name: 'sam', isLoggedIn: false } Original array
console.log(Object.keys(tinderUser));// It will provide keys in Array => [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)); // It will provide values in Array =>[ '123abc', 'sam', false ]
console.log(Object.entries(tinderUser)); //It will provide whole object with diff array[ [ 'id', '123abc' ], [ 'name', 'sam' ], [ 'isLoggedIn', false ] ]

//---------------------Object in Array---------------

const Users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"b@gmail.com"
    },
    {
        id:3,
        email:"c@gmail.com"
    }
]
console.log(Users[1]); //{ id: 2, email: 'b@gmail.com' } -whole sub-array
console.log(Users[1].email); //b@gmail.com =>You will get specific email

// Search Any value in Object 

console.log(tinderUser.hasOwnProperty('isLoggedIn')); //true => It will show answe in Boolean value


// console.log(Array.from(Users));
// console.log(Users[1]);

const Course={
    courseName:"Js in Hindi",
    fee:"999",
    CourseInstructor:"Hitesh"
}

console.log(Course.CourseInstructor);// Hitesh

//--------------DeConstruction of Object 

 const {CourseInstructor:Instructor}=Course
 console.log(Instructor); //Hitesh - DeConstructed
