import React,{useContext} from 'react';
import { HeroContext } from './HeroContext';

function HeroList(){
    const {heros} = useContext(HeroContext);
    return heros.length ?(
        <div>
            <h2 className="text-white p-2">Below are the super hero list</h2>
            {heros.map(heros => (
                <div>
                    <h4>Super Hero:{heros.name}</h4>
                    <h4>Comic :{heros.comic}</h4>
                </div>
            ))}
        </div>
    ): (
        <div>
            <h4>
                00ps!  No Heros Here
            </h4>
        </div>
    )

}
export default HeroList;