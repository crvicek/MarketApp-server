import React, { Component } from 'react';
import './App.css';
import './Add.css';
import { Route } from 'react-router-dom'
import AddContainer from './add/AddContainer'

class App extends Component {
  render() {
    return (
      <div className="App App-header">
        <div className='Header'>
          <h1>e-bay clone</h1>
        </div>

        <Route exact path="/" component={AddContainer} />
      </div>
    );
  }
}

export default App;
