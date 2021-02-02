import React, { Component } from 'react';
import './App.css';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div >
          <h2>Welcome to React Router Class</h2>

        </div>
        <ul>
          <li><Link to="/One">One</Link></li>
          <li><Link to="/Two">Two</Link></li>
          <li><Link to="/Three">Three</Link></li>
          <li><Link to="/Four">Four</Link></li>
          <li><Link to="/Four/123">Four Point One</Link></li>
        </ul>

      </div>
    );
  }
}

export default App;
