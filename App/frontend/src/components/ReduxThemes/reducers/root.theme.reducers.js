

import { combineReducers } from "redux";
import themeReducer from "./Theme.reducers.js";

const rootReducer = combineReducers({
   
    theme: themeReducer, // Include the theme reducer
})

export default rootReducer;