import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, Input, Form} from 'semantic-ui-react';
import {addHero} from './hero.actions'
const AddHeroItem = ({dispatch}) => {
    let heroName;
    let heroUrl;
    let myRef = {};
    let handleInputRef = (ref) => {
        myRef = ref;
        //this.state.inputRef = ref;
    };

    let addMyHero = (event) => {
        let name = myRef.inputRef.value;
        dispatch(addHero(name));
    };

    let formAddTest = (event) => {
        event.preventDefault();
       console.log(heroName.value);
       console.log(heroUrl.value);
    };

    return (
        <Form onSubmit={formAddTest}>
            <input ref={node => {heroName = node}} name="name" placeholder="Hero Name"/>
            <input ref={node => {heroUrl = node}} name="url" placeholder="Hero Picture URL"/>
            <Button type="submit">Add Hero</Button>
        </Form>
        // <div>
        //     <Input ref={handleInputRef} placeholder="Hero Name"></Input>
        //     <Button onClick={addMyHero}>Add Hero</Button>
        // </div>

    );
}
export default connect()(AddHeroItem);