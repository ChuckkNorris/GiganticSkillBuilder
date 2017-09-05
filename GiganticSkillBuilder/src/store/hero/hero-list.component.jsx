import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Hero from './hero.component'
import {selectHero} from './hero.actions.js';


const HeroList = ({heroes, onHeroClick}) => {
    console.log(heroes);

    // let selectHero = function(selectedHeroId) {
    //     console.log(selectedHeroId);
    // }

    let theHeroes = [];
    console.log(heroes);
    if (heroes.heroes)
    theHeroes = heroes.heroes.map(hero => (
        <Hero key={hero.id} {...hero} onClick={() => onHeroClick(hero.id)}></Hero>
        // <li key={hero.id}>My name is {hero.name}</li>
    ));
    return (
        <div>
            <p>Hero List</p>
            <ul>
            {theHeroes}
            </ul>
        </div>
    )
};

// HeroList.propTypes = {
//     heroes: PropTypes
//         .objectOf(PropTypes.shape({id: PropTypes.string.isRequired, name: PropTypes.string.isRequired}).isRequired)
//         .isRequired,
//         onHeroClick: PropTypes.func.isRequired
// }

// Container
const getAllHeroes = (heroes) => {
    return heroes;
};

const mapStateToProps = state => {
    return {
        heroes: getAllHeroes(state.heroes)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onHeroClick: id => {
            dispatch(selectHero(id))
        }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(HeroList)