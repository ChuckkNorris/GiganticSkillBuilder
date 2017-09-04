
import INITIAL_GIGANTIC_STATE from './gigantic-test-data-file'

const heroReducer = function(state = [INITIAL_GIGANTIC_STATE], action) {
    switch (action.type) {
        case ADD_HERO:
            let toReturn = Object.assign({}, state, {
                    heroes: [
                        ...state.heroes, {
                        id: action.id,
                        name: action.name
                    }]
            });
            return toReturn;
        default:
            return state;
    }
}

export default heroReducer;