import React from 'react';
import ReactDOM from 'react-dom';
import Button from '../button';
import {render,cleanup} from '@testing-library/react';
import "jest-dom/extend-expect";
import renderer from 'react-test-renderer';

afterEach(cleanup)
it ("renders without crashing" , () =>{
    const div = document.createElement("div");
    ReactDOM.render(<Button/>,div)
})

it("reders button correctly",()=>{
   const {getByTestId} =  render(<Button label="click me please"/>)
    expect(getByTestId('button')).toHaveTextContent("click me please")
})
it("matches snapshot", ()=>{
    const tree = renderer.create(<Button label="save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
})




