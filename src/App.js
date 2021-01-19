import './App.css';
import { Home } from './components/Home';
import { AddUser } from './components/AddUser';
import { EditUser } from './components/EditUser';
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import {GlobalProvider} from './context/GlobalState';


function App() {
  return (
    <div style={{maxWidth:"30rem",margin:"4rem auto"}}>
      <GlobalProvider>
      <Router>
        <Switch>
            <AddUser path="/add" component={AddUser}/>
            <EditUser path="/edit/:id" component={EditUser}/>
            <Home path="/" component={Home}/>
        </Switch>
      </Router>
      </GlobalProvider>
    </div>
  );
}
 
export default App;
