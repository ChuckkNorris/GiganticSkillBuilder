import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Row, Col} from 'react-flexbox-grid';

import {Portrait} from './components/portrait/portrait.js';
import {Skill} from './components/skill/skill';
import { createStore } from 'redux';

//function getSkills(state)
const skills = [
  { name: "Thunderbolts", description: "Cool"},
  { name: "Fireball", description: "Hot"}
]

class App extends Component {
  
  constructor() {
    super()
    // - Works - //
    this.state = {
      skillDetails: "cool"
    }

    // - Doesn't Work - //
    

    console.log(this.state);
  }

   getSkills() {
    let renderedSkills = [];
    for (let skill of skills) {
      renderedSkills.push(
          <Skill key={skill.name} name={skill.name} description={skill.description}></Skill>
      )
    }
    return (
      <Col>
        {renderedSkills}
      </Col>
    );
  }

  render() {
    return (
      <Grid>
        <Row>
          <Portrait></Portrait>
        </Row>

        <Row>
          {this.getSkills()}
         
        </Row>

      </Grid>
    );
  }
}

export default App;
