import { createContext, useReducer } from "react";


export const ThemeContext=createContext()

 const ThemeData={
    dark:{
            background:"#000000",
            color:"rgb(194,231,255)",
            height:"600px",
        },
        light:{
            color:"rgb(0,29,53)",
            // background:"rgb(194,231,255)",
            height:"600px",
        },
};

const Reducer=(state,action)=>{
    switch(action.type){
        case "Dark":
            return ThemeData.dark
        case "Light":
            return ThemeData.light 
            default :
                return state  
    }
}

const initialState=ThemeData.light

const ThemeContextcomponent=({children})=>{
  const [state,dispatch]=useReducer(Reducer,initialState)

  function dark(){
   dispatch({type:"Dark"})
  }

  function light(){
   dispatch({type:"Light"})
  }
   return(
       <ThemeContext.Provider value={{state,dark,light}} >
           {children}
       </ThemeContext.Provider>
   )
}

export default ThemeContextcomponent

