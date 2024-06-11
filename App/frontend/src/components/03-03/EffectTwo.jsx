import React, { useEffect, useState } from 'react'

const EffectTwo = () => {
    const[counter,setCounter]=useState(10)

    useEffect(()=>{
        console.log("from useeffect 2")
    },[])
  return (
    <div>
        <h1>counter-{counter}</h1>
        <button onClick={()=>setCounter(counter + 1)}>+</button>
    </div>
  )
}

export default EffectTwo