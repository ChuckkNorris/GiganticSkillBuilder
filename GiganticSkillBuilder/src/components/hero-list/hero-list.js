import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import {Hero} from '../hero/hero'
import { Button } from 'semantic-ui-react';

const heroes = [
  { name: "Tyto the Swift", url="https://gigantic.gamepedia.com/media/gigantic.gamepedia.com/6/63/Tyto_nav.PNG" },
  { name: "The Margrave", url="https://gigantic.gamepedia.com/media/gigantic.gamepedia.com/b/b3/Margrave_nav.PNG" },
  { name: "Imani", url="" },
  { name: "Beckett", url="" },
  { name: "Xenobia", url="" },
  { name: "Uncle Sven", url="" },
  { name: "Tripp", url="" },
  { name: "Knossos", url="" },
  { name: "Charnok", url="" },
  { name: "HK-206", url="" },
  { name: "Voden", url="" },
  { name: "Vadassi", url="" },
  { name: "", url="" },
  { name: "", url="" },
  { name: "", url="" },
  { name: "", url="" },
  { name: "", url="" },
  { name: "", url="" },
  { name: "", url="" },
  { name: "", url="" },
]

export class HeroList extends Component {

  createHeroList() {
    return (
      <Col>
        <Hero name="Tyto the Swift" url="https://gigantic.gamepedia.com/media/gigantic.gamepedia.com/thumb/5/53/Tyto_the_swift.PNG/375px-Tyto_the_swift.PNG"></Hero>
      </Col>
    );
  }

  render() {
    return (
      <Grid fluid>
        <Row>
         {this.createHeroList()}

        </Row>
        <Row>
        <div>
  <div class="ui right labeled button">
    <button class="ui icon button" tabindex="0">
<i aria-hidden="true" class="heart icon"></i> Like</button>
    <a class="ui left pointing basic label">2,048</a>
  </div>
  <div class="ui left labeled button">
    <a class="ui right pointing basic label">2,048</a>
    <button class="ui icon button" tabindex="0">
<i aria-hidden="true" class="heart icon"></i> Like</button>
  </div>
  <div class="ui left labeled button">
    <a class="ui right pointing basic label">2,048</a>
    <button class="ui icon button" tabindex="0">
<i aria-hidden="true" class="fork icon"></i> </button>
  </div>
</div>
        </Row>
      </Grid>
      
    );
  }
}
