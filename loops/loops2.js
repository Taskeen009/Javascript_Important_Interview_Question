const myObject={
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:"swift by apple"
}
//for in loop
for (const key in myObject) {
  // console.log(key)
  console.log(myObject[key])
}

const programming=["js","c++","ruby"]
for (const key in programming) {
    console.log(key)
    console.log(programming[key])
}


//
const map=new Map()
map.set('IN',"INDIA")
map.set('US',"USA")
map.set('Fr',"FRANCE")

// for (const key in map) {
//     console.log(key)
// }

//not possible as map are not iterable
