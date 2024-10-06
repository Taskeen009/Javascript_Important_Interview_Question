//for of 
const arr=[1,2,3,4,5]

for ( const val of arr){
   console.log(val)
}

const greetings="hello world!!!"
for (const vals of greetings) {
     console.log(vals)
}

//maps

const map=new Map()
map.set('IN',"INDIA")
map.set('US',"USA")
map.set('Fr',"FRANCE")

console.log(map)

for (const key of map) {
    console.log(key)
}

for (const [key,value] of map) {
    console.log(key,"-",value)
}

const myObject={
    'game1':'NFS',
    'game2':'spiderman'
}

//not possible
// for (const [key,value] of myObject) {
//     console.log(key,"-",value)
// }

 
