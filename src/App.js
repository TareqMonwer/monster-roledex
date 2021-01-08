import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          id: 1,
          name: "Ludo",
        },
        {
          id: 2,
          name: "PUBG",
        },
        {
          id: 3,
          name: "COC",
        },
      ],
    };
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map(monster => (
         <h3 key={monster.id}>{monster.name}</h3>
        ))}
      </div>
    );
  }
}

export default App;
