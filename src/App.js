import './App.css';
import Timer from './Timer/Timer'

function App() {
  return (
    <div className="App">
     <p>Welcome. </p>
 
     <Timer start = {Date.now()}/>
    </div>
  );
}

export default App;
