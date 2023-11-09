const programming=["Js","PHP","Ruby","Java","CPP"]

programming.forEach(function(val){
    console.log(val); // For eachh store value in val => Js/PHP/Ruby/Java
})
//---------------------------------------------------

programming.forEach((item)=>{
    console.log(item); // For eachh store value in val => Js/PHP/Ruby/Java
})

//---------------------------------------------------

function PrintMe(item){
    console.log(item); // For eachh store value in val => Js/PHP/Ruby/Java
}
programming.forEach(PrintMe)

//---------------------------------------------------

programming.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})

//Output
//item index and full array 
// Js 0 [ 'Js', 'PHP', 'Ruby', 'Java', 'CPP' ]
// PHP 1 [ 'Js', 'PHP', 'Ruby', 'Java', 'CPP' ]
// Ruby 2 [ 'Js', 'PHP', 'Ruby', 'Java', 'CPP' ]
// Java 3 [ 'Js', 'PHP', 'Ruby', 'Java', 'CPP' ]
// CPP 4 [ 'Js', 'PHP', 'Ruby', 'Java', 'CPP' ]

//---------------------------------------------------

const MyCoding=[
    {
        languageName:"Javascript",
        languageFileName:"Js"
    },
    {
        languageName:"CPP",
        languageFileName:"C++"
    },
    {
        languageName:"Java",
        languageFileName:"Java"
    },
    {
        languageName:"Python",
        languageFileName:"Py"
    }

]

MyCoding.forEach((item)=>{
    console.log(item.languageFileName);
    console.log(item.languageName);
})

