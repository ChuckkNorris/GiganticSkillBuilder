import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import { Button } from 'semantic-ui-react';

export const Hero = (props) => {
    return (

        <Button primary>
            <Grid fluid>
                <Row>
                    <img src={props.url}/>
                </Row>
                <Row center="xs">
                    <h1>{props.name}</h1>
                </Row>
            </Grid>
                
                
        </Button>
        
    );
}
