import React, { useState } from 'react'
import University from './University'

export default function About() {
    let techName ="Tech team 1" //let, const, var
    const[user, setUser] = useState({})
    const CatchChildData = (values) => {
        console.log(values)
        setUser(values)
    }
  return (
    <div>About

<University name={techName}  className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer" catchChildHandler={CatchChildData} />
    </div>
  )
}
