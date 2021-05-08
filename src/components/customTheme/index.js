import { createMuiTheme } from "@material-ui/core";

export const customTheme=createMuiTheme({
    palette:{
        //    type: 'dark',
        primary:{
            main:'#248023'
        },
        secondary:{
            main:'#369c98'
        },
        error:{
            main:'#ff4081'
        }
    },
    typography:{
        // htmlFontSize: 10,
        fontSize: 14,
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
          fontWeightMedium: 500,
        body1: {
        fontWeight: 500,
        },
        subheading: {
        fontSize: 12,
        },
        button: {
        fontStyle: 'italic',
        },
        h5:{
            fontSize:'25px',
            color:'white'
        },
        h1:{
            color:'white'
        }
    },
    
    overrides:{
        MuiButton:{
            root:{
                borderRadius:'0',
                border:'2px solid #333333',
                fontweight:'bold',
                boxShadow:'3px 3px 0 #014F56',
                // background: 'linear-gradient(45deg, #248023 30%, #369c98 90%)',
                color: 'white',
                height: 48,
                padding: '0 30px',
             
            }
        },
        MuiPaper: {
            root: {
              backgroundColor: '#4EA09E',
              border: '2px solid #333333',
            },
            rounded: {
              borderRadius: '0',
            },
            elevation1: {
              boxShadow: '4px 3px 0 #014F56',
            },
            elevation2: {
              boxShadow: '4px 4px 0 #014F56',
            },
            elevation3: {
              boxShadow: '4px 5px 0 #014F56',
            },
          },
          MuiCard: {
            root: {
              color:'#006064',
              marginTop: '30px',
              backgroundColor: '#a5d6a7',
              overflow: 'visible',
            }
          },
          MuiCardHeader: {
            root: {
              margin: '-30px auto 0',
              backgroundColor: '#4EA09E',
              border: '2px solid #333333',
              boxSizing: 'border-box',
              width: '90%',
              fontWeight: 'bold',
            }
          },
          MuiOutlinedInput: {
            root: {
              borderRadius: '5px',
            },
            notchedOutline: {
              borderColor: '#333333',
            },
          }
    }
})