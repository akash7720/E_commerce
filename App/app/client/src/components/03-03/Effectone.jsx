import React, { useEffect, useState } from 'react'

const Effectone = () => {

   const[counter1,setCounter1]=useState(0)
   const[counter2,setCounter2]=useState(20)

   useEffect(()=>{
      console.log("from useEffct 1")
   })
  return (
    <div>
       <h1>counter1 -{counter1}</h1>
       <button onClick={()=>setCounter1(counter1 + 1)}>+</button>
       <h1>counter2 -{counter2}</h1>
       <button onClick={()=>setCounter2(counter2 + 1)}>+</button>
    </div>
  )
}

export default Effectone