import React,{useState} from 'react';

function Search(){
    const [inputValue,setInputValue] = useState("");
    return(
        <input type="text"value={inputValue} onChange={e=>{setInputValue(e.target.value)}} title="dummySearch"/>
    );
}
export default Search;