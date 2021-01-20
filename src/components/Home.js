import React from 'react';
import Heading from './Heading.js';
import UserList from './UserList.js';
import AddUser from './AddUser';

export const Home = () =>{
    return(
        <>
            <Heading/>
            <UserList/>
            {/* <AddUser/> */}
        </>
    )
};