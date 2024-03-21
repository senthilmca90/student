import React, { useState } from 'react'

export default function Student(props) {

  const[state, setState] = useState({name: ''})
  const onChangeHandler = (event) => {
    console.log(event.target.value)
    console.log(event.target.name)

    setState({name: event.target.value})
  }



  const onSubmitHandler = () => {
      props.catchChildHandler(state)
  }

console.log(state)
  return (
    <div>Student {props.name}
    <input type="text" name="email" onChange={onChangeHandler}/>
    <button className='Tech' onClick={onSubmitHandler}> Submit </button>
    </div>
  )
}
