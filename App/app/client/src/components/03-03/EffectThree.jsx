import React, { useEffect, useState } from 'react'

const EffectThree = () => {
    const [counter1,setCounter1]=useState(10)
    const[counter2,setcounter2]=useState(20)

    useEffect(()=>{
        console.log("from useEffect")

    },[counter1])
    // useeffect will execute the code on insital/first render and 
    // when passed dependency changes 

  return (
    <div>
        <h1>counter1- {counter1}</h1>
        <button onClick={()=> setCounter1(counter1 + 1)}>+</button>
        <h1>counter2-{counter2}</h1>
        <button onClick={()=> setcounter2(counter2 + 1)}>+</button>
       
    </div>
  )
}

export default EffectThree;
