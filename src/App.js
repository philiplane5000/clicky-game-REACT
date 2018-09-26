import React, { Component } from 'react';
// import Wrapper from "./components/Wrapper";
import MaterialGrid from "./components/MaterialGrid";
import CharCard from "./components/CharCard";
import TopBar from "./components/TopBar";
import characters from "./characters.json";
import './App.css';

class App extends Component {

  state = {
    characters: characters,
    pickedChars: []
  }

  handlePicked = event => {
    event.preventDefault()
    const name = event.target.attributes.getNamedItem("name").value;

    let pickedCharsCopy = this.state.pickedChars;
    pickedCharsCopy.push(name)

    this.setState(this.state.pickedChars = pickedCharsCopy)
    console.log(this.state)
  }

  // componentDidMount()

  render() {
    return (
      <div>
      <TopBar/>
      <MaterialGrid>
        {this.state.characters.map(char => (
          <CharCard
            id={char.id}
            name={char.name}
            image={char.image}
            handlePicked={this.handlePicked}
          />
        ))}
      </MaterialGrid>
      </div>
    )
  }
}

export default App;
