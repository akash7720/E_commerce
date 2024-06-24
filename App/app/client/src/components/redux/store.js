
import rootReducer from './reducers/root.Reducers';

import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({ reducer: rootReducer });

export default store;


