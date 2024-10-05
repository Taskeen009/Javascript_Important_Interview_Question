// call method

const person={
    Firstname:"Taskeen",
    Lastname:"Fatima",
    fullName:function(){
        return this.Firstname
    }
}


const person2={
    Firstname:"leila",
    Lastname:"Andrew",
}
console.log(person.fullName());// will call taskeen

console.log(person.fullName.call(person2)) //will call leila