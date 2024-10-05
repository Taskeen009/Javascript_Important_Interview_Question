//singleton
//Object.create- is throgh constructor method



//object literals

const mySym=Symbol("key1")
const Juser={
    name:"Taskeen",
    "lastname":"Fatima",
    [mySym]:"myKey1",
    age:"24",
    location:"delhi",
    isLoggedIn:false,
    lastLoginDya:["Monday","Tuesday"]
}

console.log(Juser.name)
console.log(Juser["name"])
console.log(Juser["lastname"])
console.log(Juser[mySym])

Juser.name="leila"
console.log(Juser.name)
//Object.freeze(Juser)


//adding function they are trated jsut like variables
Juser.greet=()=>{
    return "hi"
    //console.log("hi") y krne se last mai undefied bhi hai kyuki function kuch return nhi kr rha 
}

console.log(Juser.greet())


// string interpolation

Juser.Greet2=function (){
    console.log(`hello ${this.name}`)
}

console.log(Juser.Greet2())

// Juser.Greet2=()=>{
//     console.log(`hello ${this.name}`)
// }
// console.log(Juser.Greet2())
//this will not work because arrow function dont have this