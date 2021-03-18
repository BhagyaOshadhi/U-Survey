import React from 'react';
import styled,{css} from 'styled-components';
const ResponsiveBtn = styled.button`
    display:inline-block;
    border-radius:3px;
    width:11rem;
    border:2px solid black;
    padding:0.5rem 0;
    margin: 0.5rem 1rem;
    color:white;
    background:teal;
   
   @media (min-width: 768px) { 
    padding: 1rem 2rem;
    border:2px solid red;
    width: 11rem;
  }
  
  @media (min-width: 1024px) { 
    padding: 1.5rem 2.5rem;
    width: 13rem;
  }
    `
export default ResponsiveBtn;