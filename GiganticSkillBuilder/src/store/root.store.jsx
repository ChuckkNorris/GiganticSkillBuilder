import GiganticApp from './root.reducer'
import { createStore } from 'redux';

// Persisted State
export const loadState = () => {
    try {
        const serializedState = localStorage.getItem('state');
        if (serializedState === null) {
            return undefined;
        }
        let toReturn = JSON.parse(serializedState);
        console.log(toReturn);
        return toReturn;
    }
    catch (err) {
        return undefined;
    }
}

export const saveState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('state', serializedState);
    }
    catch (err) {
        return undefined;
    }
}

// STORE loadState()
let store = createStore(GiganticApp);

store.subscribe(() => {
    saveState(store.getState());
})

export default store;