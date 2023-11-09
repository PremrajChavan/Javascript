// .this - is a current context which we use to get value inside the scope 
const ChatGpt={
    Ai:"Artificial",
    Powerbi:"Data analyst",
    Para:function(){
        console.log(this);
        // console.log(this.Powerbi);
        
    }
   
}
ChatGpt.Para()
