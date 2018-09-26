import React, { Component } from 'react';
import GridMDC from "./components/GridMDC";
import PaperMDC from "./components/PaperMDC";
import CharCard from "./components/CharCard";
import Score from "./components/Score";
import Alert from "./components/Alert";
import NavBar from "./components/NavBar";
import characters from "./characters.json";
import './App.css';

class App extends Component {

  state = {
    characters: characters,
    pickedChars: [],
    correctGuessTally: 0,
    topScore: 0,
    alertMessage: ""
  }

  shuffleArray = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  }

  handlePicked = event => {
    event.preventDefault()

    const name = event.target.attributes.getNamedItem("name").value;

    const newState = { ...this.state };

    newState.characters = this.shuffleArray(newState.characters)

    if (newState.pickedChars.includes(name)) {
      newState.alertMessage = `YOU ALREADY CHOSE "${name.toUpperCase()}"!`
      newState.correctGuessTally = 0
      newState.pickedChars = []
      this.setState(this.state = newState)
    } else {
      newState.pickedChars.push(name)
      newState.alertMessage = "CORRECT!"
      newState.correctGuessTally++;
      this.setState(this.state = newState)
    }

    if (newState.correctGuessTally > newState.topScore) {
      newState.topScore++
    }

    if (newState.correctGuessTally === 15) {
      newState.alertMessage = "WINNER!";
      newState.correctGuessTally = 0;
      newState.pickedChars = [];
      this.setState(this.state = newState)
    }

  }

  render() {
    return (
      <div>
        <NavBar style={{ background: "#14977D", marginBottom: "20px" }} />

        <GridMDC container spacing={24} justify="center" style={{ margin: "0 auto", maxWidth: 1200 }}>

          <PaperMDC>
            <Score type="Score" score={this.state.correctGuessTally} />
          </PaperMDC>

          <PaperMDC>
            {this.state.alertMessage === "CORRECT!" ? (
              <Alert message={this.state.alertMessage} style={{ color: "green" }} />
            ) : (
                <Alert message={this.state.alertMessage} style={{ color: "red" }} />
              )}
          </PaperMDC>

          <PaperMDC>
            <Score type="Top Score" score={this.state.topScore} />
          </PaperMDC>

        </GridMDC>

        <GridMDC container spacing={24} justify="center" style={{ maxWidth: 1000, margin: "0 auto" }}>
          {this.state.characters.map(char => (
            <CharCard
              id={char.id}
              name={char.name}
              image={char.image}
              key={char.id}
              handlePicked={this.handlePicked}
            />
          ))}
        </GridMDC>

      </div>
    )
  }
}

export default App;
