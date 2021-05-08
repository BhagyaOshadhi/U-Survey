import BForm from './BootstrapForm';
import ReactBootstrap from './ReactBootstrap';
import MaterialUI from'./MaterialUI';
import Comparison from './Comparison';
import AntD from './AntD';
import { ConfigProvider } from 'antd';
// import frFR from 'antd/lib/locale/fr_FR';
import arEG from 'antd/lib/locale/ar_EG';
import { ThemeProvider } from '@material-ui/core';
import {customTheme} from './components/customTheme';
import MuiTreeView from './MuiTreeView';


function App(props) {
  return(
    <ThemeProvider  theme={customTheme}>
    <ConfigProvider locale={arEG}>
      <div style={{background:"#e0e0e0"}}>
      <div   className="row">
        <div className="col">
          <BForm/>
        </div> 
        <div className="col">
          <ReactBootstrap/> 
        </div>
      </div>
      <div className="col-md-8 ml-5 mt-5 mr-5">
        <h3>Comparison</h3>
      <Comparison/>
      </div>
      <div className="row">
        <div className="col">
        <AntD/>
        </div>
        <div div className="col">
        <MaterialUI/>
        </div>
        
      </div>
      <br/>
      <br/>
      <div className="col-md-8 ml-5 mt-5 mr-5">
        <h3>Comparison</h3>
      <Comparison/>
      </div>
      <div className="col-md-8 ml-5 mt-5 mr-5">
        <h3>Comparison</h3>
      <MuiTreeView/>
      </div>
      </div>
      </ConfigProvider>
      </ThemeProvider>
  );
};

export default App;