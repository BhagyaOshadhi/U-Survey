import React from 'react'
import styled from 'styled-components';

const Cards = styled.div`
  display: flex;
    width:1000px ;
    position:absolute ;
    height:150px;
    max-width: 10vw !important;
    background-color: ${props => props.theme.subMain};
    border-radius: 0.6em;
    overflow: hidden;
    cursor: pointer;
    box-shadow: 0 13px 27px -5px hsla(240, 30.1%, 28%, 0.25), 0 8px 16px -8px hsla(0, 0%, 0%, 0.3), 0 -6px 16px -6px hsla(0, 0%, 0%, 0.03);
    transition: all ease 200ms;
    color: white;
    border: 3px solid ${props => props.theme.main};
     &:hover {
    transform: scale(1.03)
  }
`;
export default Cards;
