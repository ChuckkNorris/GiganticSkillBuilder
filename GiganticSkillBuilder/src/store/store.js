import GIGANTIC_TEST_DATA from './gigantic-test-data-file'
import {createStore} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react'
import {Button, Input} from 'semantic-ui-react';
import {v4} from 'node-uuid';
// let uuid = require('node-uuid');
// uuid.v4();
const initialState = GIGANTIC_TEST_DATA;


const ADD_HERO = 'ADD_HERO';
let nextHeroId = 2;
export function addHero(name) {
    return {
        type: ADD_HERO,
        id: v4(), 
        name
    };
}

// REDUCERS
export function heroReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_HERO:
            let toReturn = Object.assign({}, state, {
              //  entities: {
                    heroes: [
                        ...state.heroes, {
                        id: action.id,
                        name: action.name
                    }]
               // }
            });

            // toReturn.heroes[`${action.id}`] = {
            //     id: action.id,
            //     name: action.name
            // };
            return toReturn;
            break;
        default:
            return state;
    }
}


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
export let store = createStore(heroReducer, loadState());

store.subscribe(() => {
    saveState(store.getState());
})


// Container
const getAllHeroes = (heroes) => {
    return heroes;
};

const mapStateToProps = state => {
    return {
        heroes: getAllHeroes(state.heroes)
    }
}

// const mapDispatchToProps = dispatch => {     return {       onHeroAdded: id
// => {         dispatch(toggleTodo(id))       }     }   }

const AddHeroItem = ({dispatch}) => {
    let input;
    let myRef = {};
    let handleInputRef = (ref) => {
        myRef = ref;
        //this.state.inputRef = ref;
    };

    let addMyHero = (event) => {
        let name = myRef.inputRef.value;
        store.dispatch(addHero(name));
    };

    return (
        <div>
            <Input ref={handleInputRef} placeholder="Hero Name"></Input>
            <Button onClick={addMyHero}>Add Hero</Button>
        </div>

    );
}

const HeroList = ({heroes}) => {
    console.log(heroes);
    let theHeroes = [];
    for (let hero of heroes) {
        theHeroes.push(
            <li key={hero.id}>
                {hero.name}
            </li>
          
        );
    }
    return (
        <div>
            <p>Hero List</p>
            <ul>
            {theHeroes}
            </ul>
        </div>
    )
};

HeroList.propTypes = {
    heroes: PropTypes
        .arrayOf(PropTypes.shape({id: PropTypes.string.isRequired, name: PropTypes.string.isRequired}).isRequired)
        .isRequired
        //onTodoClick: PropTypes.func.isRequired
}

export const AllHeroes = connect(mapStateToProps)(HeroList)

export const AddHero = connect()(AddHeroItem);
