import React from 'react';
import {render,fireEvent} from '@testing-library/react';
import Button from './Button';

it("checkButtonRender",() => {
    const {queryByTitle} = render(<Button/>);
    const btn = queryByTitle("dummyButton");
    expect(btn).toBeTruthy();
});
describe("clickButton", ()=>{
    it("onClick",() =>{
        const {queryByTitle} = render(<Button/>);
        const btn:any = queryByTitle("dummyButton");
        expect(btn.innerHTML).toBe("press here");
        fireEvent.click(btn);
        expect(btn.innerHTML).toBe("you clicked");
    });
});