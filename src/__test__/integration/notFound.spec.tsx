import * as React from 'react';
import {render,RenderResult} from '@testing-library/react';
import NotFound from '../../Components/NotFound';


let documentBody :RenderResult;
 describe ('<NotFound/>',()=>{
     beforeEach(()=>{
         documentBody = render(<NotFound/>)
     });
     it('show not found message', () =>{
         expect(documentBody.getByText('404')).toBeInTheDocument();
         expect(documentBody.getByText('Not Found')).toBeInTheDocument();
     });
 });


 describe ('<NotFound/>',() =>{
     beforeEach (() =>{
         documentBody = render(<NotFound/>);
     });
     it('matches snapshot', ()=>{
         const {baseElement} = documentBody;
         expect (baseElement).toMatchSnapshot();
     })
 })