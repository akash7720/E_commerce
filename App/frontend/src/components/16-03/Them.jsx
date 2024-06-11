
import React, { useContext } from 'react'
import { ThemeContext } from './Themes';


const Them= () => {
    const {state,light,dark}= useContext(ThemeContext)
  return (
    <div style={state}>
      <h1>Theme Change</h1>
      <button onClick={()=>light()}>Light</button>
      <button onClick={()=>dark()}>Dark</button>
    </div>
 )
}

export default Them;