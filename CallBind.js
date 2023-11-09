

function setUsername(username) {
    //complex DB calls
    this.username=username
    console.log("Called");
    
}
function createUser(username,email,password){
    setUsername.call(this,username)
    this.email=email
    this.password=password
}
const chai=new createUser("chai","chai@fb.com","123")
console.log(chai);


//Before using call and this => Called
// createUser { email: 'chai@fb.com', password: '123' }

// After using call and this =>Called
// createUser { username: 'chai', email: 'chai@fb.com', password: '123' }



//Bind -The bind() method allows an object to borrow a method from another object without making a copy of that method.
// This is known as function borrowing in JavaScript.

class Result {
    constructor(){
        this.Library="React"
        this.server="https://"

        document.querySelector('#button').addEventListener('click',this.handleClick.bind(this))
    }
    handleClick(){
        console.log("button clicked");
        console.log(this.server);
    }
}