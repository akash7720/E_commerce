
import React, { createContext, useState } from 'react'

export const MycounterContext=createContext();

const ProviderCounterContext = ({children}) => {
  const [counter, setCounter] = useState(0);
       function Increment(){
           setCounter(counter + 1)
       }
        function Decrement(){
               setCounter(counter - 1)
        }

        function Reset(){
          setCounter(0)
        }

  return (
    <div>
      <MycounterContext.Provider value={{counter,Increment,Decrement,Reset}}>
           {children}
      </MycounterContext.Provider>
    </div>
  )
}

export default ProviderCounterContext;


