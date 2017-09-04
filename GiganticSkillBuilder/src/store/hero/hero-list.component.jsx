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