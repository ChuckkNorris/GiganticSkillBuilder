import {SELECT_HERO} from './hero.actions';
import INITIAL_GIGANTIC_STATE from '../gigantic-test-data-file'


const heroPage = function(state = {}, action) {
    let toReturn = state;
    switch (action.type) {
        case SELECT_HERO:
            toReturn = Object.assign({}, state, {
                selectedHeroId: action.selectedHeroId
            });
            break;
    }
    return toReturn;
}

export default heroPage;