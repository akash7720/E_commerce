import React from 'react'
import { Increment,Decrement } from '../redux/actions/counter.action'
import{useDispatch,useSelector}from'react-redux'

const CounterRedux=()=> {
  const dispatch=useDispatch()
  const counter= useSelector((state)=>state.counter.counter)
  
  return (
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(Increment())}>+</button>
      <button onClick={() => dispatch(Decrement())}>-</button>
    </div>
  )
}

export default CounterRedux

