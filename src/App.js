import React from 'react';
import './App.css';
import {Cards,Charts,CountryPicker} from './components';
import {fetchData} from './API/index'
import axios from 'axios';  
 
class App extends React.Component{
  state = {
    data: {},
    country:"",
    url : 'https://covid19.mathdro.id/api',
  }
  


  
  fetchData = async(country) =>{
      let changableUrl = this.state.url;
      if (country){
         changableUrl = `${this.state.url}/countries/${country}`
      }
      try{
       const {data : {confirmed,recovered,deaths,lastUpdate}} = await axios.get(changableUrl);
       console.log({confirmed,recovered,deaths,lastUpdate})
      //  this.setState({data:data})
       return { confirmed,recovered,deaths,lastUpdate,};
      }catch(error){
       console.log(error)
    }
   }


 
  render(){
    const {data,country} = this.state;
    return (
      <div className="container">
          <Cards data={this.fetchData}/>
          <CountryPicker  data={data} handleCountryChange={this.handleCountryChange}/>
          <Charts data={data} country={country}/>
      </div>
  );
}
}

export default App;
