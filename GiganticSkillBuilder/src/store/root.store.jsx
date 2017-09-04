import RootReducer from './root.reducer'

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

// STORE
export let store = createStore(RootReducer, loadState());

store.subscribe(() => {
    saveState(store.getState());
})