const heroReducer = function(state = initialState, action) {
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

export default heroReducer;