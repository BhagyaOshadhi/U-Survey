import Reaact from 'react';
import '../styles.css';


export const Card = () => {
    return (
        <div className='card'>
            <img src='person1.png' className='card-image' />
            <div style={{ display: 'flex' , alignItems:'center'}}>
                <img src='star.png' className='card-star' />
                <text style={{ color: "gray" }}>5.0(6).USA</text>
            </div>
            <text>Life lessons with Kotie zaferes</text>
            <br/>
            <text><b>from $136</b>/person</text>

        </div>
    )
}