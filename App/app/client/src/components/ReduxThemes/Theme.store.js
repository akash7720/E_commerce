import { createStore } from 'redux';
import rootReducer from './reducers/root.theme.reducers';

const store = createStore(rootReducer);



export default store;