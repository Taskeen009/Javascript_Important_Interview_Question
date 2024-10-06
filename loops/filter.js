const coding = ["js", "c++", "java"];

const values = coding.forEach((item) => {
    console.log(item); // This will log each item
    return item;      
});

console.log(values);

//values se kuch return nhu hoga undefined ayega

//new mwthods

const myNums=[1,2,3,4,5,6]
const nums=myNums.filter((num)=>{
  return num>4
})
console.log(nums)

//doing this ny foreach
const newNums=[]
myNums.forEach((item)=>{
    if(item>4)
        newNums.push(item)
})

console.log("by for loop")
console.log(newNums)


const myNumber=[1,2,3,4,5,6,7]

// const newnums=myNumber.map((num)=>{
//     return num+10;
// })
// console.log(newnums)

const newNum=myNumber
             .map((num)=>num*10)
             .map((num)=>num+10)
             .filter((num)=>num>=40)
console.log(newNum)


