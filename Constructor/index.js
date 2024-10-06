function User(username,logincount)
{
    this.username=username;
    this.logincount=logincount

    //return this
    this.greet=()=>{
        console.log(`${this.username}`)
    }
}
// const userone=User("nella",8)
// const usertwo=User("harry",90)
//console.log(userone) //yaha overwrite kr dia dekho 
//iske kie new keyword use kro 

//return this naa likho toh ???


const userone=new User("nella",8)
const usertwo=new User("harry",90)
console.log(userone)
console.log(userone.constructor)

//when we write new kwyword empty instance is created
//new object is created
//constructor function is called due to new keyword
//this constructor pack all the arguments and give to us
//all the argumnets gets injected to it
//and we get it