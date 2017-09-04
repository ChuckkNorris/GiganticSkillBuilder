
const AddHeroItem = ({dispatch}) => {
    let input;
    let myRef = {};
    let handleInputRef = (ref) => {
        myRef = ref;
        //this.state.inputRef = ref;
    };

    let addMyHero = (event) => {
        let name = myRef.inputRef.value;
        store.dispatch(addHero(name));
    };

    return (
        <div>
            <Input ref={handleInputRef} placeholder="Hero Name"></Input>
            <Button onClick={addMyHero}>Add Hero</Button>
        </div>

    );
}
export const AddHero = connect()(AddHeroItem);