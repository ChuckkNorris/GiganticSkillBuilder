import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Hero} from '../hero/hero'
import {Button, Input, onClick} from 'semantic-ui-react';
//import {dispatch} from 'redux'
import {addHero, store, AllHeroes, AddHero} from '../../store/store';




export class HeroList extends Component {
  constructor() {
    super();
    this.state = {};
  }
  createHeroList() {
    return (
      <Col>
        <Hero
          name="Tyto the Swift"
          url="https://gigantic.gamepedia.com/media/gigantic.gamepedia.com/thumb/5/53/Tyto_the_swift.PNG/375px-Tyto_the_swift.PNG"></Hero>
      </Col>
    );
  }
  //myRef = {};


  

  render() {
    return (
      <Grid fluid>
        <Row>
          {this.createHeroList()}

        </Row>
        <Row>
          <div>
            <AddHero></AddHero>
            <AllHeroes></AllHeroes>
         
            <div className="ui right labeled button">
              <button className="ui icon button" tabIndex="0">
                <i aria-hidden="true" className="heart icon"></i>
                Like</button>
              <a className="ui left pointing basic label">2,048</a>
            </div>
            <div className="ui left labeled button">
              <a className="ui right pointing basic label">2,048</a>
              <button className="ui icon button" tabIndex="0">
                <i aria-hidden="true" className="heart icon"></i>
                Like</button>
            </div>
            <div className="ui left labeled button">
              <a className="ui right pointing basic label">2,048</a>
              <button className="ui icon button" tabIndex="0">
                <i aria-hidden="true" className="fork icon"></i>
              </button>
            </div>
          </div>
        </Row>
      </Grid>

    );
  }
}
