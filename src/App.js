import React from "react";
import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import cartItems from "./Cart-items";
import {createStore} from "redux";
import reducer from './Reducer'
import {Provider} from 'react-redux'  

const initialStore = {
  cart:cartItems,
  total:106.00,
  amount:17
};

const store = createStore(reducer,initialStore);

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer  />
    </Provider>
  );
}

export default App;
