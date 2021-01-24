import React,{useState,useContext,useEffect} from 'react';
import {Form,FormGroup,Label,Input,Button} from 'reactstrap';
import {Link,useHistory} from 'react-router-dom';
import {GlobalContext} from '../context/GlobalState';

export const EditUser = (props) =>{
    const [selectedUser,setSelectedUser] = useState({id:"",name:""})
    const {users, editUser} = useContext(GlobalContext);
    const history = useHistory();
    const currentUserId = props.match.params.id;

    useEffect(() => {
        const userId = currentUserId;
        const selectedUser = users.find(user => user.id === userId)
        setSelectedUser(selectedUser)
    },[currentUserId,users])
    const onSubmit = () =>{
    history.push('/');
   
    }
    const onChange = (e) =>{
        setSelectedUser({...selectedUser,[e.target.name]:e.target.value})
    }
    return(
        <Form onSubmit={onSubmit}>
          <FormGroup>
              <Label>Name</Label>
              <Input type="text" value={selectedUser.name} placeholder="Enter Name" onChange={onChange}></Input>
          </FormGroup>
          <Button type="submit">Edit Name</Button>
          <Link to="/" className="btn btn-danger ml-2">Cancel</Link>
      </Form>
    )
}