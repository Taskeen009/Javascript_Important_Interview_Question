// js is primarily a prototype language 

// ###OOPS
// ###OBJECTS- collections of properties and methods
// why use OOP
// parts of OOP

// object literal

// contructor function
//prototypes
//clasess
//instances(new,this)


//4 pillars
//abstraction
//encapsulation
//inheritance
//polymorphism





//////object literal
const User={
  username:"taskeen",
  logincount:8,
  signedIn:true,

  getUserDetails:()=>{
    console.log("got details")
  }
}

console.log(User.getUserDetails())