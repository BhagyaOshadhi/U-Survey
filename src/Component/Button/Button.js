import React, {useState} from "react";

function Button(){
    const [value,setValue] = useState("press here");
    const dummyFunction = ()=>{
        setValue("you clicked");
    };
    return(
        <button onClick={dummyFunction} title="dummyButton">
            {value}
        </button>
    )
}
export default Button;