import React from 'react';
import {Link} from 'react-router-dom';
import {ListGroup,ListGroupItem,Button} from 'reactstrap';

const UserList = () => {
    return(
        <ListGroup className="mt-4">
            <ListGroupItem className="d-flex">
                <b>User One</b>
                <div className="ml-auto"> 
                    <Link className="btn btn-warning mr-2" to="/edit/1">Edit</Link>
                    <Button color="danger">Delete</Button>
                </div>
            </ListGroupItem>
            <ListGroupItem className="d-flex">
                <b>User Two</b>
                <div className="ml-auto"> 
                    <Link className="btn btn-warning mr-2" to="/edit/1">Edit</Link>
                    <Button color="danger">Delete</Button>
                </div>
            </ListGroupItem>
        </ListGroup>
    )
}
export default UserList;