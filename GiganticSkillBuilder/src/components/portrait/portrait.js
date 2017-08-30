import React, { Component } from 'react';
import './portrait.css';
import { Grid, Row, Col } from 'react-flexbox-grid';

//
export class Portrait extends Component {
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
