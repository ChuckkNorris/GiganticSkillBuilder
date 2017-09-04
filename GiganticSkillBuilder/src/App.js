import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Row, Col} from 'react-flexbox-grid';

import {Portrait} from './components/portrait/portrait.js';
import {Skill} from './components/skill/skill';
import {createStore} from 'redux';
import {HeroList} from './components/hero-list/hero-list'
import {ButtonExampleButton} from './controls/button.js'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

const skills = [
  {
    name: "Thunderbolts",
    description: "Cool"
  }, {
    name: "Fireball",
    description: "Hot"
  }
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
      <Grid>
        {renderedSkills}
      </Grid>
    );
  }

  render() {
    return (
      <Router>
        <Grid>
          <Row>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/heroes">Heroes</Link></li>
            </ul>
            <Route exact path="/" component={ButtonExampleButton} />
            <Route path="/heroes" component={HeroList} />
            <HeroList></HeroList>
            <ButtonExampleButton></ButtonExampleButton>

          </Row>

          <Row>
            <Grid>
              <Col xs={12} md={12}>
                {this.getSkills()}
              </Col>
              <Col></Col>

            </Grid>

          </Row>

        </Grid>
      </Router>

    );
  }
}

export default App;
