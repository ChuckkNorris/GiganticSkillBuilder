import React, { Component } from 'react';
import './skill.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

//
export class Skill extends Component {
  render() {
    return (
      <Grid fluid>
      <Row>
        <Col xs={6} sm={12}>
          <div className="circle"></div>
        </Col>
        <Col xs={6} sm={12}>
          <div className="circle"></div>
        </Col>
        <Col xs={6} sm={12}>
          <div className="circle"></div>
        </Col>
      </Row>
    </Grid>
    );
  }
}
