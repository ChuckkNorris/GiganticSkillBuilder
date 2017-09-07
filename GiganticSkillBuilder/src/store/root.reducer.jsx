import {combineReducers} from 'redux'

import heroes from './hero/hero.reducer';
import heroPage from './hero/hero-page.reducer';

//combine()

const giganticApp = combineReducers({
    heroes,
    heroPage
});

export default giganticApp;