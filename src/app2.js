import React,{useState} from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';


const useStyles = makeStyles((theme)=>({
    root:{
     '& .MuiTextField-root' : {
      //  background: 'red',
       margin: theme.spacing(1),
     },
     
    },button:{ margin: theme.spacing(1),}
  
  }))

  function App() {
    const classes = useStyles();
    const [inputFields,setInputFields] =useState([{firstName:"", lastName:""},{firstName:"", lastName:""}]);
     const handleAddField =() =>{
        setInputFields([...inputFields,{firtsName:"", lastName:""}])
     }
    return (
        <Container>
             <form className={classes.root} >
                 {inputFields.map((inputField,index)=>(
                     <div key={index}>
                        <TextField variant = "filled" name="firstName" value={inputField.firstName} label="First Name"/>
                        <TextField variant = "filled"  name="lastName" value={inputField.lastName} label="Last Name"/>
                        <IconButton onClick={handleAddField}>
                            <AddIcon/>
                        </IconButton>
                        <IconButton onClick={handleAddField}> 
                            <RemoveIcon/> 
                        </IconButton>
                           
                        
                     </div>
                  
                 ))}
             </form>

        </Container>
    )
  }
  export default App;