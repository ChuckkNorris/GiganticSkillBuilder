import {combineReducers} from 'redux'

import heroes from './hero/hero.reducer';

//combine()

const giganticApp = combineReducers({
    heroes
});

export default giganticApp;