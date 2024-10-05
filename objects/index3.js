//object destructring

const course={
    coursename:"js in hindi",
    price:"999",
    courseInstructor:"taskeen"
}


// const {courseInstructor}=course
// console.log(courseInstructor)
const {courseInstructor:intructor}=course
console.log(intructor)