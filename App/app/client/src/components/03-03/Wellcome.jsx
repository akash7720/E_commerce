import React, { useState } from 'react'

const Wellcome = () => {
    
    const [isSignIn,setisSignIn]=useState(false)
    // console.log(isSignIn,"isSignIn")

    function change(){
      setisSignIn(!isSignIn)
    }
  return (
    <div>
       
       {/* {isSignIn ? <button onClick={() => setisSignIn(!isSignIn)}>Welcome, Logout!</button> :
                <button onClick={function () { setisSignIn(!isSignIn) }}>Sign In</button>} */}

                
            {isSignIn ? <button onClick={change}>Welcome, Logout!</button> :
                <button onClick={change}>Sign In</button>}

            {isSignIn && <h1>Welcome isSignIn turned to true</h1>}
        </div>
  )
}

export default Wellcome