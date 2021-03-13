import React from 'react';
import './App.css';
import Button from './Component/Button/Button';
import Search from './Component/Search/Search';

function App(props) {
  return(
    <div className="App">
        <Button/>
        <Search/>
    </div>
  );
};

export default App;