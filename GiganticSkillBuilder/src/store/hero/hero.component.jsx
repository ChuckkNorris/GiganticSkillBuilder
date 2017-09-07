import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import { Button } from 'semantic-ui-react';

export const Hero = (props) => {
    let selectHero = function(selectedHeroId) {
        console.log(selectedHeroId);
    }
    return (

        <Button onClick={props.onClick} primary>
            <Grid fluid>
                <Row>
                    <img src={props.imageUrl}/>
                </Row>
                <Row center="xs">
                    <h1>{props.name}</h1>
                </Row>
            </Grid>
                
                
        </Button>
        
    );
}
export default Hero;
