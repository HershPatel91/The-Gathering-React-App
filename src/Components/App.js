import React, { Component } from 'react';
import NavBar from './Navbar'
import EventContainer from '../Container/EventContainer'
import '../style.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
           <NavBar />
           < EventContainer />
        </div>
      </div>
    );
  }
}

export default App;
