import React, { Component } from 'react';
import Timer from './Timer';

class App extends Component {
  state = {
    timerIDs: []
  }

  // Add componentDidMount for setup when the component is mounted
  componentDidMount() {
    // For example, you can start some initial actions here
    console.log("Component is mounted.");
  }

  // Add componentWillUnmount for cleanup when the component is unmounted
  componentWillUnmount() {
    // For example, you can perform cleanup actions here
    console.log("Component is about to be unmounted.");
  }

  // ... (the rest of your component code)

  render() {
    return (
      <div className="App">
        <h1>MultiTimer</h1>
        <button onClick={this.handleAddTimer}>Add New Timer</button>

        <div className="TimerGrid">
          {this.renderTimers()}
        </div>
      </div>
    );
  }

  // ... (the rest of your component code)
}

export default App;
