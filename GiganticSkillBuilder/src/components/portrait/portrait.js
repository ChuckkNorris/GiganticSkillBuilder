import React, {Component} from 'react';
import './portrait.css';
import {Grid, Row, Col} from 'react-flexbox-grid';

//
export class Portrait extends Component {
  render() {
    return (
      <Grid fluid>
        <Row>

            <div className="circle align-center"></div>

        </Row>
      </Grid>
    );
  }
}
