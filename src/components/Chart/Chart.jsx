import React,{useState,useEffect} from 'react';
import { fetchDailyData } from '../../API';
import {Line,Bar} from 'react-chartjs-2';
import './Chart.css'

const Cards = () =>{
    const [dailyData,setDailyData] = useState([]);
    useEffect(() =>{
        const fetchAPI = async () =>{
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    });
    const lineChart = (
        dailyData.length !== 0 
        ? (<Line
            data={{
                labels:dailyData.map(({date}) =>date),
                datasets:[{
                    data:dailyData.map(({confirmed}) =>confirmed),
                    lable:"Infected",
                    borderColor:"#3333ff",
                    fill:true
                },
                {
                    data:dailyData.map(({deaths}) =>deaths),
                    lable:"Deaths",
                    borderColor:"red",
                    backgroundColor:'rgba(255,0,0,0.5)',
                    fill:true
                }],
            }}
        />) : null
    );
    return(
      <div className='container'>
          {lineChart}
      </div>
    )
}
export default Cards;
