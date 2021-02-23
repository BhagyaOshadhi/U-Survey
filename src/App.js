import React,{useState} from 'react';
import './App.css';
import axios from 'axios'



function App() {
  const [crypto,setCrypto] = useState("");
  const [img,setImg] = useState("");
  const [name,setName] = useState("");
  const [symbol,setSymbol] = useState("");
  const [link,setLink] = useState("");
  const [desc,setDesc] = useState("");
  const [usd,setUsd] = useState("");
  const handleSubmit = () => {
    const url = "https://api.coingecko.com/api/v3/coins/" +crypto;
    axios.get(url)
    .then(res =>{
      const resData = res.data;
      setImg(resData.image.large);
      setName(resData.name);
      setSymbol(resData.symbol);
      setLink(resData.links.homepage[0]);
      setDesc(JSON.stringify(resData.description.en));
      setUsd("US Dollers($) : "+resData.market_data.current_price.usd);
      console.log(res.data);
    })
    .catch(err =>{
      console.log(err)
    })
  }
  function createMarkup(){
    return {__html:desc}
  }
  return (
    <div className="App" style={{backgroundColor:"crimson",minHeight:"100vh"}}>
      <div classname=" bg-success p-4"><h1 >Cripto Currency search</h1></div>
      <div className="d-flex justify-content-center">
        <div className="col-md-4 mt-5">
          <input className="form-control" placeholder="enter the crypto currency" type="text" value = {crypto} 
          onChange={(e)=>setCrypto(e.target.value)} required/>
        </div>
      </div>
      <button onClick = {handleSubmit} className="btn btn-secondary px-5 mt-4">Submit</button>
      <div className="mt-5 container-fluid d-flex justify-content-center">
        <div className="col-md-4 bg-success p-2 rounded">
          <img src={img} alt={name} width="150"/>
          <br/>
          <h1 className="text-white">{name}</h1>
          <h2>{symbol}</h2>
          <h2><a className="text-white" href={link}>{link}</a></h2>
          <br/>
          <h2>{usd}</h2>
        </div>
        <div className="text-white col-md-8 my-auto">
          <div dangerouslySetInnerHTML={createMarkup()}></div>
        </div>
      </div>
    </div>
  );
}

export default App;