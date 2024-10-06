const coding = ["js", "ruby", "c++"]

// coding.forEach((item)=>{
//    console.log(item)
// })

coding.forEach((item, index, arr) => {
    console.log(item, index, arr)
})


const myCoding = [
    {
        languagename: "javascript",
        filename: "js"
    },
    {
        languagename: "java",
        filename: "jv"
    },
    {
        languagename: "python",
        filename: "py"
    },

]

myCoding.forEach((item)=>{
   console.log(item.filename)
})

//map se bhi kr skte hai y lekin map se new array aata hai lekin foreach se nhi
