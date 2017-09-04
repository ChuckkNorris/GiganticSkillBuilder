import {v4} from 'node-uuid';

const ADD_HERO = 'ADD_HERO';
export function addHero(name) {
    return {
        type: ADD_HERO,
        id: v4(), //nextHeroId++,
        name
    };
}