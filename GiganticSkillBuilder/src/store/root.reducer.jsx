import {combineReducers} from 'redux'

import heroReducer from './hero/hero-reducer';

//combine()

const giganticApp = combineReducers({
    heroReducer
});

export default giganticApp;