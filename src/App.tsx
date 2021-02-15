import React,{Component} from 'react';
import './App.css';
import {Store} from './Store';
import {Link} from '@reach/router';


export default function App(props:any):JSX.Element {
  const {state} = React.useContext(Store)
    console.log(state)
  return (
    <React.Fragment>
        <header className="header">
            <div>
                <h2>Rick and Morty</h2>
                <h3>Pick your favourite episode</h3>
            </div>
            <div>
                <Link to='/'>Home</Link>
                <Link to='/Faves'>Favourite(s):  {state.favourites.length}</Link>

            </div>
        </header>
        {props.children}
    </React.Fragment>
  );
 }



