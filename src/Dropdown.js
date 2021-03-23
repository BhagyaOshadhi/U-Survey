import React from 'react';
import styled from "styled-components";



const StyledLi = styled.li`
  float: left;
`;

const Dropbtn = styled.div`
  display: inline-block;
  color: white;
    border: 4px solid ${props => props.theme.main};
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  background: ${props => props.theme.subMain} ;
  border-radius:5px;
`;

const DropDownContent = styled.div`
  display: none;
  position: absolute;
  background-color: ${props => props.theme.main};
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const DropDownLi = styled(StyledLi)`
  display: flex;
 margin-right:10px;
  &:hover {
    transform: scale(1.03)
  }
  &:hover ${DropDownContent} {
    display: block;
  }
`;

const SubA = styled.a`
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  &:hover {
    background-color: #f1f1f1;
  }
`;
function Dropdown (props){
    return(
        <div style={{display:"flex"}}>
        <DropDownLi>
            <Dropbtn theme={props.theme}>
                DropDown1
            </Dropbtn>
            <DropDownContent theme={props.theme}>
                {" "}
                <SubA >Link 1</SubA>
                <SubA >Link 2</SubA>
                <SubA >Link 3</SubA>
            </DropDownContent>
        </DropDownLi>
    <DropDownLi>
        <Dropbtn theme={props.theme}>
            DropDown2
        </Dropbtn>
        <DropDownContent theme={props.theme}>
            {" "}
            <SubA >Link 1</SubA>
            <SubA >Link 2</SubA>
            <SubA >Link 3</SubA>
        </DropDownContent>
    </DropDownLi>
    <DropDownLi>
        <Dropbtn theme={props.theme}>
            DropDown3
        </Dropbtn>
        <DropDownContent theme={props.theme}>
            {" "}
            <SubA >Link 1</SubA>
            <SubA >Link 2</SubA>
            <SubA >Link 3</SubA>
        </DropDownContent>
    </DropDownLi>
        </div>
    );
}
export default Dropdown;