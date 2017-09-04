// Container
const getAllHeroes = (heroes) => {
    return heroes;
};

const mapStateToProps = state => {
    return {
        heroes: getAllHeroes(state.heroes)
    }
}