import './App.css';
import LoginPage from './LoginPage/LoginPage'
import EmployeeInfo from './LoginPage/EmployeeInfo'
// import{Router,Route} from 'react-router'
// import {createBrowserHistory} from 'history';
// const browserHistory = createBrowserHistory();
function App() {
  return (
    <div>
      <EmployeeInfo/>
          {/* <LoginPage/> */}
    </div>
  //  <Router history={browserHistory}>
  //    <Route path={"/"} component={LoginPage}></Route>
  //    <Route path={"empinfo"} component={EmployeeInfo}></Route>
  //  </Router>
  );
}

export default App;
