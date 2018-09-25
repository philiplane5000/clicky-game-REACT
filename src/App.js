import React, { Component } from 'react';
import Wrapper from "./components/Wrapper";
import CharCard from "./components/CharCard";
import characters from "./characters.json";
import './App.css';

class App extends Component {

  state = {
    characters
  }

  render() {
    return (
      <Wrapper>
        {this.state.characters.map(char => (
          <CharCard
            id={char.id}
            name={char.name}
            image={char.image}
          />
        ))}
      </Wrapper>


    )
  }
}

export default App;
