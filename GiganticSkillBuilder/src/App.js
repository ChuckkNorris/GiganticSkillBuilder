import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Grid, Row, Col} from 'react-flexbox-grid';

import {Portrait} from './components/portrait/portrait.js';
import {Skill} from './components/skill/skill';
import {createStore} from 'redux';
import HeroList from './store/hero/hero-list.component'
//import {HeroList} from './components/hero-list/hero-list'
import {ButtonExampleButton} from './controls/button.js'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import AddHero from './store/hero/add-hero.component';
import HeroSkillTree from './store/hero/hero-skill-tree.component'

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

  render() {
    return (
      <Router>
        <Grid>
          <Row>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/heroes">Heroes</Link>
              </li>
            </ul>

            {/* <HeroList></HeroList>
            <ButtonExampleButton></ButtonExampleButton> */}

          </Row>
          <Row>
          <AddHero></AddHero>
          </Row>

          <Row>
          <Route exact path="/" component={ButtonExampleButton}/>
            <Route path="/heroes" component={HeroList}/>
           
          
            <Grid>
              <Col xs={12} md={12}>
                <HeroSkillTree></HeroSkillTree>
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
