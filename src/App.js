import React, { Component } from 'react';
import './App.css';
import UserOutput from './UserOutput/UserOutput';
import UserInput from './UserInput/UserInput';

class App extends Component {
  state = {
      username: 'PopeTR'
  }

  usernameChangedHandler = (event) => {
    this.setState({username: event.target.value})
  }

  render () {
    return (
      <div className="App">
      <h1>Hi Im a React App</h1>
      <UserInput
        username={this.state.username}
        changed= {this.usernameChangedHandler }
        currentName={this.state.username}/>
      <UserOutput
        username={this.state.username}/>
      <UserOutput
        username={this.state.username}/>

      </div>
    );
  }
}

export default App;
