import React from 'react';
import './App.css';
import {Cards,Charts,CountryPicker} from './components';
import {fetchData} from './API'

class App extends React.Component{
  state = {
    data: {},
    country:"",
  }
  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
  }
  handleCountryChange = async (country) =>{
    const fetchedData = await fetchData(country);
    this.setState({fetchedData,country:country})
  }
  render(){
    const {data,country} = this.state;
  return (
    <div className="container">
     <Cards data={data}/>
     <CountryPicker  data={data} handleCountryChange={this.handleCountryChange}/>
     <Charts data={data} country={country}/>

    </div>
  );
}
}
export default App;
