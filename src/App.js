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


function App(props) {
  const classes = useStyles();
  const [inputFields,setInputFields] = useState([
    {firtsName:"", lastName:""}
  ])
  const handleChangeInput=(index,event)=>{
    console.log(index, event.target.value)
  }
  return(
    <Container>
      <h1>Add new User</h1>
      <form className={classes.root}>
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
            <IconButton><RemoveIcon/> </IconButton>
            <IconButton><AddIcon/> </IconButton>
          </div>
        ))}
        <Button className={classes.button} variant="contained" color="primary" type="submit" endIcon={<Icon>send</Icon>}>Send</Button>
      </form>

    </Container>
  );
};

export default App;