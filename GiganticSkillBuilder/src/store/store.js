import GIGANTIC_TEST_DATA from './gigantic-test-data-file'
import {createStore} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import React from 'react'
import {Button, Input} from 'semantic-ui-react';

const initialState = GIGANTIC_TEST_DATA;

// export const addHero = name => {     return {         type:     } } ACTIONS
const ADD_HERO = 'ADD_HERO';
let nextHeroId = 2;
export function addHero(name) {
    return {
        type: ADD_HERO,
        id: nextHeroId++,
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

// STORE
export let store = createStore(heroReducer);

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
        console.log(ref.inputRef);
        myRef = ref;
        //this.state.inputRef = ref;
    };

    let addMyHero = (event) => {
        let name = myRef.inputRef.value;
        console.log(name);
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

    // for (let heroId of Object.getOwnPropertyNames(heroes)) {
    //     let hero = heroes[heroId];
    //     console.log(hero);
    //     theHeroes.push(
    //         <li key={hero.id}>
    //             {hero.name}
    //         </li>
          
    //     );
    // }
    return (
        <div>
            <p>Hero List</p>
            <ul>
            {theHeroes}
            </ul>
            
        </div>
        
    // <ul>   {heroList.map(hero => (       // {...todo}  onClick={() =>
    // onTodoClick(todo.id)}     <p key={hero.id}  >{hero.name}</p>   ))} </ul>
    )
};

HeroList.propTypes = {
    heroes: PropTypes
        .arrayOf(PropTypes.shape({id: PropTypes.number.isRequired, name: PropTypes.string.isRequired}).isRequired)
        .isRequired
        //onTodoClick: PropTypes.func.isRequired
}

export const AllHeroes = connect(mapStateToProps)(HeroList)

export const AddHero = connect()(AddHeroItem);
