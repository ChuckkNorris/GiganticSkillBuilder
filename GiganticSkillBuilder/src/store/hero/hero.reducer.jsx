import {ADD_HERO, SELECT_HERO} from './hero.actions';
import INITIAL_GIGANTIC_STATE from '../gigantic-test-data-file'


const heroes = function(state = INITIAL_GIGANTIC_STATE, action) {
    let toReturn = state;
    switch (action.type) {
        case ADD_HERO:
            toReturn = Object.assign({}, state, {
                heroes: [
                        ...state.heroes, {
                        id: action.id,
                        name: action.name
                    }]
            });
            break;
        case SELECT_HERO:
            toReturn = Object.assign({}, state, {
                selectedHeroId: action.selectedHeroId
            });
            break;
    }
    return toReturn;
}

export default heroes;