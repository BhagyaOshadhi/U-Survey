import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import {makeLowerCase} from "./Helpers/HelperFunctions";

test('renders learn react link', () => {
  render(<App/>);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test("lowerCase", () =>{
  expect(makeLowerCase("HIRU")).toBe("hiru");
  expect(makeLowerCase("BuGGY")).toBe("buggy");
})