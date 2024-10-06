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