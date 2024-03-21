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

console.log({html})
  return (
    <div>EsFeature
        <p dangerouslySetInnerHTML={{__html: html}}></p>
    </div>
  )
}
