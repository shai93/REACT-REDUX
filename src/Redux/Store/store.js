import {createStore} from 'redux';
import cakeReducer from '../Reducer/cakeReducer';

const store  = createStore(cakeReducer, 1);

export default store