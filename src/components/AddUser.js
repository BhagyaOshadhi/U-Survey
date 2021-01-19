import React,{useContext} from 'react';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';
import {Link,useHistory} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState';


export const AddUser = () =>{
    const {AddUser} = useContext(GlobalContext);
    const history = useHistory();
    const onSubmit = () =>{
        const newUser = {
            id:4,
            name:'user four'
        }
        AddUser(newUser) ; 
        history.push('/');
    }
    return(
      <Form onSubmit={onSubmit}>
          <FormGroup>
              <Label>Name</Label>
              <Input type="text" placeholder="Enter Name"></Input>
          </FormGroup>
          <Button type="submit">Submit</Button>
          <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
      </Form>
    )
}