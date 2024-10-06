
//function defintion
function sayMyName(){
    console.log("hi");
}

 //reference  
 //sayMyName
sayMyName() //execution



//rest operator

function cal(...num){
    return num
}
console.log(cal(566,35,24,66))

function cal2(val1,val2,...num){
    return num
}
console.log(cal2(200,34,567,124))


//ANY OBJECT
const user={
    username:"taskeen",
    price:190
}
function handleObject(anyObject)
{
 console.log(`username ${anyObject.username}`)
}
handleObject(user)

//scope


//this -refers to current context
//not in arrow function


//IIFE
//is use to avid global scope pollution
const chai = (() => {
    console.log("helo");
  })();

(function chai(){
    console.log("hello")
})();

//semiclon lga dena toh excecute hoga

((name)=>{
console.log(` hi ${name}`)
})('hitesh')
