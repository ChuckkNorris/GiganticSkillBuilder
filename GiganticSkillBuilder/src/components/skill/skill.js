import React, {Component} from 'react';
import './skill.css';
import {Grid, Row, Col} from 'react-flexbox-grid';

export class Skill extends Component {

  render() {
    return (
      <Row>
         <div>{this.props.name}</div>
         <div>{this.props.description}</div>
      </Row>
     
    );
  }
}
