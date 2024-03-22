import React from 'react'
//import and export
// const University = require('./components/University')

export default function EsFeature() {
  let techName ="Tech team 1" //let, const, var

   // ----------------
// normal functions
function Sample(arg, arg2, arg3, arg4){  // function defini
  console.log("sss "+arg+arg2)
  console.log("sss ", arg, arg2)
  let c = arg3+arg4

  console.log(c)
  
}
//undefined, null, string, number, bolean, 
let name = "Raj"
let a = 1
let b = 2
const result = Sample(name, techName, a, b) //function declaration
console.log(result) //Tech team 1=3
// ----------------------------
// datatypes number, string,  undefined
// arrow functions --> single, multiple
const arrowSample = (arg, arg1) => {
if(arg1 < arg){
  return 10+arg+arg1
}else{
  return 10
}
}
// if else ---> ternary operation
const sss = (a > b)?10+a+b:10

const arrowSample1 = (arg, arg1) => (arg1 > arg)?10+arg+arg1:10

// 2 > 1  ==> true
const result1= arrowSample(a, b) // function declaration
const result2= arrowSample1(a, b) // function declaration

console.log(result1)
console.log(result2)

// template string

let html = `<h1>Hello ${techName}</h1> <h3> sjd faslkjf Test</h3>`

//4. block scope vs function scope

// function scope variable --> var
// block scope variable --> let, const
// global variable --> variableName
// let -> resign value, const -> not resign

function Goal (){  // function scope
let secondChild = "Sham"
var childenNameAAA = "Aarthi" //function scope
  console.log(`childenName1`, childenName+"vala")
  console.log(`secondChild`, secondChild)
  return childenName
}

let Anbu

if(true){ //block scope
  let secondChild = "Sham"
  var childenName = "Shiva"
  console.log({secondChild, childenName})
}

console.log(childenName, `childenName2`) //Shiva
console.log(Anbu) //undefined



const getVal = Goal()

// console.log(getVal, `getVal`)


// const newObj = {} // empty object --> not primitive data types
const newArr1 = [] // empty array
const newArrObj = [{}] // empty array object

// 5. mutable vs unmutable

const newObj = { //object, json
  name: "Anna University",
  email: "peri@gmail.com", // parent key pair
  college: { // nested objet
      name: 'Adhiyamaan', 
      dept: { //nested objec
        name: "MCA",
        user: {
          name: "Anbu",
        },        
        class: ["a", "b", "c"]
      }
  }
}
newObj.sports = "Cricket"
newObj.canteen = "Hall"
delete newObj.email

//5. spreed operator

const firstObject = {name: "Raj"}
const secondObject = {email: "ram@gmail.com"}
const thirdObject = Object.assign(firstObject, secondObject, {isActive: true}) //first option

const fourthObj = {...firstObject, ...secondObject, isActive: true} // second option

//6. destructure object
const { isActive } = fourthObj
const { nemail, college } = newObj
console.log(isActive)
console.log(fourthObj.isActive)

console.log({thirdObject, fourthObj})
//me

// 11 -> newObj --> ref --> dd //javascript value update
// 13 --> newObj --> 14  --> //mema
// 14 --> Object.assign, structuredClone, Json --> asdfa 

const Obj = Object.assign({}, newObj)  // sigle
const dd = structuredClone(Obj) // nested object
dd.name ="Jayam"
dd.college.dept.name = "MBA"
console.log(newObj.college.dept.name)
console.log(newObj.college.dept.class[1]) //array index
console.log({newObj, dd})
console.log(newObj.name)
console.log(newObj.email)

//

  return (
    <div>EsFeature <br></br>
      {newObj.name} <br></br>
      {newObj.college.dept.user.name} <br></br>
      {newObj.college.dept.class[1]}<br></br>
        <p dangerouslySetInnerHTML={{__html: html}}></p>
    </div>
  )
}
