import React from 'react';
import './App.css';
import Button from './components/button/button';
function App(props) {
  return(
      <div className="App">
          <header className="App-header">
                <Button className="button-style" label="click me please"/>
          </header>
    </div>
  );
};

export default App;