import { createContext, useReducer } from "react"
import  AppReducer from './AppReducer';

const initialState ={
    users:[
        {id:1,name: "user one"},
        {id:2,name: "user two"},
        {id:3,name: "user three"},
    ]
};
//create context
export const GlobalContext = createContext(initialState);

//provider component
export const GlobalProvider = ({children}) =>{
     const [state,dispatch] = useReducer(AppReducer,initialState);
//Actions
const removeUser = (id) =>{
    dispatch({
        type:'REMOVE_USER',
        payload:id
    })
}
const addUser = (user) =>{
    dispatch({
         type: 'ADD_USER',
         payload:user})
}
    return(
        <GlobalContext.Provider value={{
            users: state.users,
            removeUser,
            addUser
         }}>
             {children}
        </GlobalContext.Provider>
     )
 }