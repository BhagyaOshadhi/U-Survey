import React from 'react';
import '../styles.css';

export const Hero = () => {
    return (
        <section className='hero'>
            <img src='airbnb.png' className='hero-image' />
            <h1 className='hero-header'>Online Experiences</h1>
            <p className='hero-paragraph'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}