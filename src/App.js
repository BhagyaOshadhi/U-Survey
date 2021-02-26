import './App.css';
import HeroList from './HeroList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import HeroContextProvider from './HeroContext';
import Nav from './Nav';
import HeroForm from './HeroForm';


function App() {
  return (
    <HeroContextProvider>
        <div>
            <Nav/>
            <HeroForm/>
            <div className="App" style={{background:"crimson"}}>
            <HeroList/>
            </div>
        </div>
    </HeroContextProvider>
  );
}

export default App;