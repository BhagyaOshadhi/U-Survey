import React,{useState,createContext} from 'react';

export const HeroContext = createContext();

function HeroContextProvider(props){
    const [heros,setHeros] = useState([
        {name:"Flash" ,comic:"DC"},
        {name:"Ironman", comic:"Marvel"}
    ])
    const addHero = ( name , comic ) => {
        setHeros([ ...heros,{name ,comic }])
    }
    return(
        <HeroContext.Provider value={{heros,addHero}}>
            {props.children}
        </HeroContext.Provider>
    )
}
export default HeroContextProvider;