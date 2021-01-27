import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import './CountryPicker.css';
import {fetchCountries} from '../../API/index';
// import {countries} from '../../API/index';

const CountryPicker = ({handleCountryChange}) =>{
    // console.log(confirmed)
    let listt = ['asd','asd','asd'];
    const [countries,setCountries] = useState();
    useEffect(() =>{
        const fetchAPI = async () =>{
            setCountries(await fetchCountries)
        }
        fetchAPI();
    },[setCountries]);
    // console.log("countries",countries.length)
    // console.log("fetchedCountries[0]",fetchedCountries.length)
    return(
    
       <FormControl className="formControl">
           <NativeSelect defaultValue="" onChange={(e) =>handleCountryChange(e.target.value)}>
               <option value ="">Global</option>
               {/* {countries.map((country,i) => <option key={i} value={country}>{country}</option>)} */}
               {listt.map((list,i) => <option key={i} value={list}>{list}</option>)}
           </NativeSelect>
       </FormControl>
    )
}
export default CountryPicker;
