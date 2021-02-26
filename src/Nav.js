import React,{useContext} from 'react';
import {HeroContext} from './HeroContext'

// const design = {
//     background:"black",
//     height:"60px",
//     color:"white",
//     diplay:"flex",
//     justifyContent:"space-around"
// }
function Nav(){
    const {heros} = useContext(HeroContext);
    return(
        <div style={{display:"flex",justifyContent:"space-around",color:"white", height:"60px", background:"black",}}>
            <h2>Super Heros</h2>
            <h2>List of heros : {heros.length}</h2>
        </div>
    )
}
export default Nav;