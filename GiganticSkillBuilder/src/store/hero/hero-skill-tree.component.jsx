import React, {Component} from 'react';
import store from '../root.store'
const skills = [
    {
      name: "Thunderbolts",
      description: "Cool"
    }, {
      name: "Fireball",
      description: "Hot"
    }
  ];   

const HeroSkillTree = (state) => {
    store.subscribe(() => {
        let newSelectedHero = store.getState().heroes.selectedHeroId;
        console.log(store.getState());
        console.log('From skill tree: ' + newSelectedHero);
    })
    // getSkills() {
    //     let renderedSkills = [];
    //     for (let skill of skills) {
    //       renderedSkills.push(
    //         <Skill key={skill.name} name={skill.name} description={skill.description}></Skill>
    //       )
    //     }
    //     return (
    //       <Grid>
    //         {renderedSkills}
    //       </Grid>
    //     );
    //   }

    return (
        <div>
            My Hero
        </div>
    )
}
export default HeroSkillTree;