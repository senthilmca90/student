import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers, updateUser } from '../slices/userSlice'

export default function Contact() {

  const state = useSelector(state => state)
  const userValue = useSelector(state => state.users)
  console.log({userValue, state})
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  }, []) //empty depencies array
  console.log(`after get the value`, {userValue})
const onUpdateHanlder = () => {
  dispatch(updateUser({name: 'Sivasankar', email: 'siva@gmail.com'}))
}
  return (
    <>
    <div className='row'>
      
      <div className='col-md-4'>{userValue?.name}, {userValue?.email}</div>
      <div className='col-md-4'>
    
        <form>
        <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="nameHelp" />
    <div id="nameHelp" className="form-text">We'll never share your name with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  {/* <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" />
  </div> */}
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
  </div>
  <button type="button" className="btn btn-primary" onClick={onUpdateHanlder}>Submit</button>
</form>
</div>
<div className='col-md-4'></div>
</div>
    </>
  )
}
