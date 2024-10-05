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
Object.freeze(Juser)