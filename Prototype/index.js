function multiplyby5(num)
{
    return num*5
}

multiplyby5.power=20
console.log(multiplyby5(5))
console.log(multiplyby5.power)
console.log(multiplyby5.prototype) 

//new keyword
function CreateUser(username,scorecard)
{
  this.username=username
  this.scorecard=scorecard
}
CreateUser.prototype.increment=function(){
    this.scorecard++;
}
CreateUser.prototype.printMe=function(){
    console.log(` score of ${this.scorecard}`)
}

const chai = new CreateUser("chai",90);
console.log(chai.printMe())


//prototypes

function setUsername(username){
    //complex db call
    this.username=username
}

function createUser(username,email,password)
{
    setUsername(username)
    this.email=email
    this.password=password
}

const coffee= new createUser("chai","chai@gmail.com","123")
console.log(coffee)