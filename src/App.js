import React from 'react';
import './App.css';
import ButtonProps from "./ButtonProps";
import {Button,TomatoButton} from './ExtendingStyles';
import {rotate,Rotate} from './Animations';
import FunctionTheme from "./FunctionThemes";
import ThemeWithoutStyleComponent from "./ThemeWithoutStyleComponent";



function App(props) {
    Button.defaultProps = {
        theme: {
            main: "palevioletred"
        }
    }

    const funcTheme = {
        fg: "palevioletred",
        bg: "white"
    };
    const invertTheme = ({ fg, bg }) => ({
        fg: bg,
        bg: fg
    });
    return(
    <div>
        <h6>Adapting based on props</h6>
       <ButtonProps>Normal Button</ButtonProps>
       <ButtonProps primary>Primary Button</ButtonProps>
        <br/>
        <h6>Extending Styles</h6>
        <Button>Normal Button</Button>
        <TomatoButton>Tomato Button</TomatoButton>
        <br/>
        <h6>“as ” pholimophic prop </h6>
        <Button as="a" href="/">Link with Button styles</Button>
        <TomatoButton as="a" href="/">Link with Tomato Button styles</TomatoButton>
        <br/>
        <br/>
        {/*<Rotate>&lt; 💅🏾 &gt;</Rotate>*/}
        <h6>Theming</h6>
        <TomatoButton as="a" href="/themes">Themes</TomatoButton>
        <br/>
        <h6>Function themes</h6>
        <FunctionTheme theme={funcTheme}>Default Theme</FunctionTheme>
        <FunctionTheme theme={invertTheme(funcTheme)}>Inverted Theme</FunctionTheme>
        <br/>
    </div>
  );
};

export default App;