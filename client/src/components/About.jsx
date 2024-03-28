import React, { useState } from 'react'
import University from './University'
import { useSelector } from 'react-redux'

export default function About() {
    let techName ="Tech team 1" //let, const, var
    const userValue = useSelector(state => state.users)
    console.log({userValue})
    const[user, setUser] = useState({})
    const CatchChildData = (values) => {
        console.log(values)
        setUser(values)
    }
  return (
    <div>About
      {userValue.name}, {userValue.email}
<University name={techName}  className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" catchChildHandler={CatchChildData} />
    </div>
  )
}
