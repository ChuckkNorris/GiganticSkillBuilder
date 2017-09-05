import {v4} from 'node-uuid';

export const ADD_HERO = 'ADD_HERO';
export const SELECT_HERO = 'SELECT_HERO';

export function addHero(name) {
    return {
        type: ADD_HERO,
        id: v4(), //nextHeroId++,
        name
    };
}

export function selectHero(selectedHeroId) {
    return {
        type: SELECT_HERO,
        selectedHeroId
        //selectedHeroId: id, //nextHeroId++,
    };
}