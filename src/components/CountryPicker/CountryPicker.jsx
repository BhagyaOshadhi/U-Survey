import React,{useState,useEffect} from 'react';
import {NativeSelect,FormControl} from '@material-ui/core';
import './CountryPicker.css';
import {fetchCountries} from '../../API/index';
// import {countries} from '../../API/index';

const CountryPicker = ({handleCountryChange}) =>{
    let listt = ['asd','asd','asd'];
    const [fetchedCountries,setFetchedCountries] = useState([]);
    useEffect(() =>{
        const fetchAPI = async () =>{
            setFetchedCountries(await fetchCountries)
        }
        fetchAPI();
    },[setFetchedCountries]);
    console.log("fetchedCountries",fetchedCountries)
    // console.log("fetchedCountries[0]",fetchedCountries.length)
    return(
    
       <FormControl className="formControl">
           <NativeSelect defaultValue="" onChange={(e) =>handleCountryChange(e.target.value)}>
               <option value ="global">Global</option>
               {listt.map((list,i) =><option value={list} key={i}>{list}</option>)}
               {/* {fetchedCountries.map((country,i) => <option key={i} value={country}>{country}</option>)} */}
           </NativeSelect>
       </FormControl>
    )
}
export default CountryPicker;
