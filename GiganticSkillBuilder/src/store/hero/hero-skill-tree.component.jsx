import React, { Component } from 'react';
import store from '../root.store'

class HeroSkillTree extends Component {
    constructor() {
        super();
        this.state = {
            selectedHeroId: 'Coolio Man'
        };
        this.updateHeroData();
    }

    updateHeroData() {
        store.subscribe(() => {
            let heroPageStore = store.getState().heroPage;
            if (heroPageStore) {
                let selectedHeroId = heroPageStore.selectedHeroId;
                console.log(selectedHeroId)
                this.setState({selectedHeroId: selectedHeroId});
            }

        })
    }

    render() {
        return (
            <div>
                My Hero Skill Tree
            {this.state.selectedHeroId}
            </div>
        )
    }
}
// const HeroSkillTree = (state) => {
//     console.log(state);
//     state.selectedHeroId = 'abc';
//     store.subscribe(() => {
//         let heroPageStore = store.getState().heroPage;
//        if (heroPageStore) {
//         let selectedHeroId = heroPageStore.selectedHeroId;
//         console.log(selectedHeroId)
//         state.selectedHeroId = selectedHeroId;
//        }

//     })
//     return (
//         <div>
//             My Hero
//             {state.selectedHeroId}
//         </div>
//     )

// }


export default HeroSkillTree;