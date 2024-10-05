// PART 2 OF OBJECTS

//  const tinderUser= newObject()
//the above one is singleton object the below one is not singlton
//  const tinderUser={}
//both are objects

const tinderUser={}
tinderUser.id="1234"
tinderUser.name="Sammy"
tinderUser.isLoggedIn=false
// console.log(tinderUser)

const regularUser={
    email:"some@gmail.com",
    fullname:{
        userfullname:{
          firstname:"taskeen",
          lastname:"fatima",
        }
    }
}

//? optional chaining
console.log(regularUser.fullname?.userfullname.firstname)



const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}

// const obj3={obj1,obj2}
// console.log(obj3)
//ise obj k andr obj aa jaega

const obj3=Object.assign({},obj1,obj2)
console.log(obj3)

//documentaion dekh lena object.assign ka 


const users=[
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"k@gmail.com"
    },
]

console.log(users[0].email)

console.log(tinderUser)
console.log(Object.keys(tinderUser)) //isse saari keys ka array bn jaega
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))//array of array

console.log(tinderUser.hasOwnProperty('isLogges'))

