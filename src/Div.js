import styled from 'styled-components';

const Div = styled.button`
  font-size: 1em;
  margin: 1em;
  width:90vw;
  height:80vh;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${props => props.theme.main};
  border: 2px solid ${props => props.theme.main};
`;
export default Div;