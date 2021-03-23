import React,{useState} from 'react';
import ButtonTheme from "./ButtonTheme";
import Div from "./Div";
import Dropdown from './Dropdown';
import Cards from "./Cards";
import Chart from "./Chart";

function Themes(){
    const themeDefault = {
        main: "black",
        subMain: "white"
    };
    const theme1 = {
        main: "royalblue",
        subMain: "#90CAF9"
    };
    const theme2 = {
        main: "palevioletred",
        subMain: "#F48FB1"
    };
    const theme3 = {
        main: "darkorange",
        subMain: "#FFA726"
    };
    const theme4 = {
        main: "mediumseagreen",
        subMain: "#66BB6A"
    };
    const [theme,setTheme] = useState(theme1);
    return(
        <div>
            <ButtonTheme theme={themeDefault} onClick={()=>{setTheme(themeDefault)}}>without theme</ButtonTheme>
            <ButtonTheme theme={theme1} onClick={()=>{setTheme(theme1)}}>RoyalBlue</ButtonTheme>
            <ButtonTheme theme={theme2} onClick={()=>{setTheme(theme2)}}>PaleVioletRed</ButtonTheme>
            <ButtonTheme theme={theme3} onClick={()=>{setTheme(theme3)}}>DarkOrange</ButtonTheme>
            <ButtonTheme theme={theme4} onClick={()=>{setTheme(theme4)}}>MediumSeaGreen</ButtonTheme>
            <br/>
            <br/>
            <Div theme={theme}>
                <Chart  theme={theme}/>
                <Cards  theme={theme}>
                    <h5>card 1</h5>
                </Cards>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <Dropdown theme={theme}/>
            </Div>
        </div>
    )
}
export default Themes;