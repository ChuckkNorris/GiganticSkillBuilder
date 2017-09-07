import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import Hero from './hero.component'
import {selectHero} from './hero.actions.js';


const HeroList = ({heroes, onHeroClick}) => {
    console.log('From heroes');

    let theHeroes = [];
    console.log(heroes);
    if (heroes)
        theHeroes = heroes.map(hero => (
        <Hero key={hero.id} {...hero} onClick={() => onHeroClick(hero.id)}></Hero>
    ));
    console.log(theHeroes)
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