import React,{ useContext } from 'react';
import { withTheme } from 'styled-components';
import { ThemeContext } from 'styled-components';

function MyComponent (){
    const themeContext = useContext(ThemeContext);
    console.log('Current theme: ', themeContext);
    return(
        <div>
            <button>Theme without Styled Component</button>
        </div>
        );
}

export default withTheme(MyComponent);
