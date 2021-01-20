import React,{useState,useContext} from 'react';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';
import {Link,useHistory} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState';
import {v4 as uuid} from 'uuid';

export const EditUser = (props) =>{
    const [selectedUser,setSelectedUser] = useState({id:"",name:""})
    const {users, editUser} = useContext(GlobalContext);
    const history = useHistory();
    const currentUserId = props.match.params.id
    const onSubmit = () =>{
    
   
    }
    const onChange = (e) =>{
       
    }
    return(
        <Form onSubmit={onSubmit}>
          <FormGroup>
              <Label>Name</Label>
              <Input type="text" placeholder="Enter Name" onChange={onChange}></Input>
          </FormGroup>
          <Button type="submit">Edit Name</Button>
          <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
      </Form>
    )
}