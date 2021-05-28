import React,{useState} from 'react';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import {makeStyles} from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import { v4 as uuidv4 } from 'uuid';
import App2 from './app2';

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
  const [inputFields,setInputFields] = useState([
    {firtsName:"", lastName:""}, {firtsName:"", lastName:""}
  ])
  const handleChangeInput=(index,event)=>{
 const values = [...inputFields];
 values[index][event.target.name] = event.target.value ;
 setInputFields(values);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log("InputFields", inputFields);
  }
  const handleAddField = () =>{
    setInputFields([...inputFields,{firtsName:"", lastName:""}])
  }
  const handleRemoveField=(index)=>{
    const values = [...inputFields]
    values.splice(index,1);
    setInputFields(values);

  }
  return(
    <Container>
      <h1>Add new User</h1>
      <form className={classes.root} onSubmit={handleSubmit}>
        {inputFields.map((inputField,index)=>(
          <div key= {index}>
            <TextField 
              name="FirstName"
              label="First Name"
              variant="filled"
              value={inputField.firtsName}
              onChange ={(event)=>handleChangeInput(index,event)}
            />
             <TextField 
              name="LastName"
              label="Last Name"
              variant="filled"
              value={inputField.lastName}
              onChange ={(event)=>handleChangeInput(index,event)}
            />
            <IconButton onClick={()=>handleRemoveField(index)}><RemoveIcon/> </IconButton>
            <IconButton onClick={() =>handleAddField()}><AddIcon/> </IconButton>
          </div>
        ))}
        <Button className={classes.button} variant="contained" color="primary" type="submit" endIcon={<Icon>send</Icon>} onClick={handleSubmit}>Send</Button>
      </form>
      {/* <App2/> */}
    </Container>
  );
};

export default App;