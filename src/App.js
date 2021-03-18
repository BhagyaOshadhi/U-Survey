import React, {Fragment, useState } from 'react';
import 'react-datetime/css/react-datetime.css';
import DateTimePicker from "./DatePicker";
import Button from './Button';
import GlobalStyle from "./GlobalStyle";
import Div from "./Div";
import ButtonWithCss from "./ButtonWithCss";
import Anchor from "./Anchor"
import ResponsiveBtn from './ResponsiveBtn';

function App(props) {
  return(
      <Fragment>
          <GlobalStyle />
          <Button>Im a button</Button>
          <div className="App"  style={{marginLeft:"10%"}} >
              {/*<DateTimePicker/>*/}
              <br/>

              <br/>
              <ResponsiveBtn>Im responsive button</ResponsiveBtn>
              <br/>
              <Div>
                  <Anchor
                      href="https://styled-components.com/"
                      target="_blank"
                      rel="noopener"
                  >I am a Link</Anchor>
                  <ButtonWithCss primary>primary button</ButtonWithCss>
                  <ButtonWithCss secondary>secondary </ButtonWithCss>
                  <ButtonWithCss danger>danger button</ButtonWithCss>
              </Div>
          </div>
      </Fragment>
  );
};

export default App;