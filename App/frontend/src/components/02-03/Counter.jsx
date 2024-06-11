

import { useState } from "react"


function Counter(){
    const initalPrice=10 
    const [Counter ,setCounter] = useState(0)
    const [price,setPrice] = useState(initalPrice);

    function Increment(){
        if(Counter <10 ){
            setCounter(prevValue => prevValue+1)
            setPrice(initalPrice *(Counter + 1))
        }
    }

    function Decrement(){
             if(Counter > 0){
               setCounter(prevValue => prevValue -1)
               setPrice(initalPrice *(Counter - 1))
             }
    }

    function Reset(){
           setPrice(0)
        setCounter(0)
    }
    return(
        <div>
            <h1>Counter-{Counter} and price-{price}</h1>
            <button onClick={Increment}>+</button>
            <button onClick={Decrement}>-</button>
            <button onClick={Reset}>Reset</button>

        </div>
    )
}
export default Counter;