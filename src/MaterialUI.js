import React from 'react';
import { Button,TextField ,Grid,Radio ,RadioGroup ,FormControlLabel ,FormControl ,FormLabel ,FormHelperText 
,Menu ,MenuItem ,Checkbox,Card, CardActions, CardContent,Typography ,Paper  } from '@material-ui/core';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import DeleteIcon from '@material-ui/icons/Delete';
import { makeStyles, } from '@material-ui/core/styles';
// import Calendar from "react-material-ui-calendar";
import { green, orange } from '@material-ui/core/colors';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// import TreeView from '@material-ui/lab/TreeView';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import MuiTreeView from './MuiTreeView';
import TreeView from "@material-ui/lab/TreeView";
import MuiTreeView2 from './MuiTreeView2';
import TreeItem from "@material-ui/lab/TreeItem";
import MuiTreeView3  from './MuiTreeView3';
//  import MuiCalendar from './MuiCalendar';

const outerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: orange[500],
    },
  },
});

const innerTheme = createMuiTheme({
  palette: {
    secondary: {
      main: green[500],
    },
  },
});




const useStyles = makeStyles({

  "@global": {
    ".MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label": {
      backgroundColor: "white"
    },
    ".MuiTreeItem-root.Mui-selected > .MuiTreeItem-content .MuiTreeItem-label:hover, .MuiTreeItem-root.Mui-selected:focus > .MuiTreeItem-content .MuiTreeItem-label": {
      backgroundColor: "gray"
    }
  },

    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
     paper: {
    // padding:'8px',
    textAlign: 'center',
    color: 'secondary',
    marginRight:"30px"
  },
  root2: {
    flexGrow: 1,
  },
  root3: {
    width: 300,
  },
  root4: {
    height: 240,
    flexGrow: 1,
    maxWidth: 400,
  },
  title: {
    paddingBottom: '1rem'
  }
  });


function MaterialUI(props) {
    const [value, setValue] = React.useState('female');
    const [error, setError] = React.useState(false);
    const [helperText, setHelperText] = React.useState('Choose wisely');
    const [anchorEl, setAnchorEl] = React.useState(null);

    const [childNodes, setChildNodes] =React.useState(null);
  const [expanded, setExpanded] = React.useState([]);
  const [activeItemId, setActiveItemId] = React.useState();

  function fetchChildNodes(id) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          children: [
            {
              id: "2",
              name: "Calendar"
            },
            {
              id: "3",
              name: "Settings"
            },
            {
              id: "4",
              name: "Music"
            }
          ]
        });
      }, 1000);
    });
  }

  const handleChange = (event, nodes) => {
    const expandingNodes = nodes.filter((x) => !expanded.includes(x));
    setExpanded(nodes);
    if (expandingNodes[0]) {
      const childId = expandingNodes[0];
      fetchChildNodes(childId).then((result) =>
        setChildNodes(
          result.children.map((node) => <MaterialUI key={node.id} {...node} />)
        )
      );
    }
  };

  const renderLabel = (item) => (
    <span
      onClick={(event) => {
        console.log(item.id);
        setActiveItemId(item.id);
        // if you want after click do expand/collapse comment this two line
        event.stopPropagation();
        event.preventDefault();
      }}
    >
      {item.name}
    </span>
  );

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

    const handleChange2 = (event) => {
      setValue(event.target.value);
    };
    const handleRadioChange = (event) => {
        setValue(event.target.value);
        setHelperText(' ');
        setError(false);
      };
    const handleSubmit = (event) => {
        event.preventDefault();
    
        if (value === 'best') {
          setHelperText('You got it!');
          setError(false);
        } else if (value === 'worst') {
          setHelperText('Sorry, wrong answer!');
          setError(true);
        } else {
          setHelperText('Please select an option.');
          setError(true);
        }
      };


      const tree = [
        {
          value: 'Parent A',
          nodes: [{ value: 'Child A' }, { value: 'Child B' }],
        },
        {
          value: 'Parent B',
          nodes: [
            {
              value: 'Child C',
            },
            {
              value: 'Parent C',
              nodes: [
                { value: 'Child D' },
                { value: 'Child E' },
                { value: 'Child F' },
              ],
            },
          ],
        },
      ];
    return(
        <div className="ml-5 mt-5 mr-5">
            <h1>Material-UI</h1>
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                
                <Grid container spacing={3}>
                    <Grid item sm={12}>
                        <TextField id="standard-basic" label="First Name" />
                        <TextField id="filled-basic" label="Last Name"  />
                    </Grid>
                   
                    <Grid item sm={12}>
                    <TextField id="filled-basic" label="Email" disabled />
                    <TextField id="outlined-basic" label="Phone" required />
                    </Grid>
                    <Grid item sm={12}>
                        <TextField  id="standard-basic" label="First Name"variant="outlined" />
                        <TextField id="filled-basic" label="Last Name" variant="filled" />
                    </Grid>
                    <Grid item sm={12}>
                    <TextField  error id="standard-error-helper-text"  label="Error" defaultValue="Error "helperText="Incorrect entry."/>
                    <TextField  error id="standard-error-helper-text"  label="Error" defaultValue="Error"helperText="Incorrect entry."variant="outlined"/>
                    </Grid>
                   
                    <Grid item sm={12}>
                       <TextField id="outlined-number" label="Number"type="number"InputLabelProps={{ shrink: true,}}variant="outlined"/>
                    </Grid>
                    {/* <Grid item sm={12}>
                    <MuiTreeView tree={tree} />                   
                    </Grid> */}
                    <Grid item sm={12}>
                      <MuiTreeView/>
                    </Grid>
                    <Grid item sm={12}>
                      <MuiTreeView2/>
                    </Grid>

                    <Grid item sm={12}>
                      {/* <MuiTreeView3/> */}
                     {/* < MuiCalendar/> */}
                    </Grid>
                    
                    <Button variant="outlined"component="label"color="secondary">
                      Upload File
                      <input type="file"hidden/></Button>


                    <Grid item sm={12}>
                    <Button  className={useStyles().paper} variant="contained" color="primary">Click me</Button>
                    <Button variant="outlined" color="secondary" onClick={()=>{alert("clicked")}}>Click me</Button>
                    </Grid>
                    <h5>sizing</h5>
                    <Grid item sm={12}>
                    <Button className={useStyles().paper} variant="contained" size="small" color="primary">Small</Button>
                    <Button className={useStyles().paper} variant="outlined" size="medium" color="primary">Medium</Button>
                    <Button variant="contained" size="large" color="primary">Large</Button>
                    </Grid>

                    <h5>Buttons with icons and label</h5>

                    <Grid item sm={12}>
                    <Button className={useStyles().paper}  variant="contained"color="secondary"startIcon={<DeleteIcon />}>Delete</Button>
                    <Button className={useStyles().paper}  variant="contained"color="primary"startIcon={<CloudUploadIcon />}> Upload</Button>
                    </Grid>
                    <Grid>
                    <Card className={useStyles().root3}>
                        <CardContent>
                        <Typography className={useStyles().title} variant="h5" component="h1">
                        Material UI card
                        </Typography>
                          <Typography variant="body2" component="p">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button variant="contained" color="primary">
                            Read more
                          </Button>
                        </CardActions>
                        </Card>
                    </Grid>
                    <br/>
                    <br/>
                    <Grid item sm={12}>
                      <Paper elevation={0} />
                      <Paper />
                      <Paper elevation={3} />
                    </Grid>
                    <br/>
                    <br/>
                    <Grid item sm={12}>
                    <h5>Material-UI's styling solution</h5>
                    <Button className={useStyles().root}>Styled with Hook API</Button>
                    </Grid>
                    <h5>Date  picker</h5>
                    <Grid item sm={12}>
                        <TextField id="date"label="select date" type="date"defaultValue="01/01/2021"InputLabelProps={{shrink: true,}}/>
                    </Grid>
                    <h5>Time picker</h5>
                    <Grid item sm={12}>
                         <TextField id="time"label="select time"type="time"defaultValue="00:00" InputLabelProps={{ shrink: true,}}inputProps={{step: 300, }}/>
                    </Grid>
                    <Grid item sm={12}>
                    <FormControl component="fieldset">
                        <FormLabel component="legend">Gender</FormLabel>
                        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
                            <FormControlLabel color="primary" value="female" control={<Radio />} label="Female" />
                            <FormControlLabel color="primary" value="male" control={<Radio />} label="Male" />
                            <FormControlLabel color="primary" value="other" control={<Radio />} label="Other" />
                            <FormControlLabel color="primary" value="disabled" disabled control={<Radio />} label="(Disabled option)" />
                        </RadioGroup>
                        </FormControl>

                        <Grid item sm={12}>
                            <FormControl component="fieldset" error={error} >
                                <FormLabel component="legend">Pop quiz: Material-UI is...</FormLabel>
                                <RadioGroup aria-label="quiz" name="quiz" value={value} onChange={handleRadioChange}>
                                <FormControlLabel value="best" control={<Radio />} label="The best!" />
                                <FormControlLabel value="worst" control={<Radio />} label="The worst." />
                                </RadioGroup>
                                <FormHelperText>{helperText}</FormHelperText>
                                <Grid item sm={12}>
                                {/* <Calendar/> */}
                                </Grid>
                                <Grid item sm={12}>
                                  <h5>Drop down</h5>
                                  <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} variant="contained" color="secondary">
                                    Open Menu
                                  </Button>
                                  <Menu id="simple-menu"anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)}onClose={handleClose}>
                                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={handleClose}>My account</MenuItem>
                                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                                  </Menu>
                                </Grid>
                                <Grid item sm={12}>
                                  <h5>Theming</h5>
                                  <ThemeProvider theme={outerTheme}>
                                    <Checkbox defaultChecked />
                                    <ThemeProvider theme={innerTheme}>
                                      <Checkbox defaultChecked />
                                    </ThemeProvider>
                                  </ThemeProvider>
                                </Grid>
                                <Button type="submit" variant="contained" color="primary">
                                submit
                                </Button>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}
export default MaterialUI;