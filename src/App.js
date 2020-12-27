import React from 'react'
import './App.css';
import {Link} from "react-router-dom";



function App() {
  return (
    <div className="App">
        <p>hi</p>
        <div>
          <li><Link to ="/One">one</Link></li>
        </div>
    </div>
  );
}

export default App;
