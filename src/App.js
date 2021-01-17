import './App.css';
import Header from './components/Header.js';
import Balance from './components/Balance.js';
import IncomeExpences from './components/IncomeExpences';
import TransactionList from './components/TransactionList';
import AddTransaction from './components/AddTransaction';
import {GlobalProvider} from "./context/GlobalState";



function App() {
  return (
      <GlobalProvider>
    <div className="App">
      <Header/>
      <div className="container">
        <Balance/>
        <IncomeExpences/>
        <TransactionList/>
        <AddTransaction/>
      </div>
    </div>
      </GlobalProvider>
  );
}

export default App;
