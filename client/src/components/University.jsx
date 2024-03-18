import React from 'react'
import Student from './Student'

export default function University(props) {
let sprops = {
  name: 'Tech Team'
}
  console.log(`props`, props)
  console.log(`dd`, sprops)
  return (
    <div>University
        {props.rel}
        <Student {...props}/>
    </div>
  )
}
