import styled,{css} from 'styled-components';
const ButtonWithCss = styled.button`
    display:inline-block;
    border-radius:3px;
    width:11rem;
    border:2px solid black;
    padding:0.5rem 0;
    margin: 0.5rem 1rem;
    color:white;
    background:teal;
 
    ${props =>props.primary && css`
    background:teal;
    `}
     ${props =>props.secondary && css`
    background:blue;
    `}
     ${props =>props.danger && css`
    background:red;
    `}
    `
export default ButtonWithCss;