import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import Switch1 from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import CssBaseline from "@material-ui/core/CssBaseline";
import withStyles from '@material-ui/core/styles/withStyles'
import Grid from '@material-ui/core/Grid';
import  './App.css'
import img from './bg.jpg'
import img1 from './bgg.jpeg'
import Navbar from './components/Navbar'

import home from './pages/home';
import login from './pages/login';
import signup from './pages/signup';
import axios from 'axios'


axios.defaults.baseURL='https://us-central1-social-web-439d4.cloudfunctions.net/api'

let theme={}

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      filter: 
        {
          name: "Dim",
          active: false,
        },
        check :false,  
    }
    this.update = this.update.bind(this);
  }

  update(){
    this.setState({check:!this.state.check})
  }
 
  render() {
    if(this.state.check) {
       theme =createMuiTheme({palette: {
        primary: {
          main: '#424242',
          },
        secondary: {
          main: '#00bcd4',
          },
        type:'dark'
      },
        overrides: {
          MuiCssBaseline: {
            "@global": {
              body: {
                backgroundImage:
                  "url(" +img1+")"
                }
            }
          }
        },
       })
    }
    else { 
      theme=createMuiTheme({
        palette: {
          primary: {
            main: '#0097a7',
            },
          secondary: {
            main: '#00bcd4',
            }},
          overrides: {
            MuiCssBaseline: {
              "@global": {
                body: {
                  backgroundImage:
                  "url(" +img+")"
                }              
              }
             }
          },
          
      })
    }
    const {classes} =this.props
    return (
      
      <MuiThemeProvider theme ={theme} >
        <CssBaseline />
        <div className='App'>
        <Router>
        <Navbar />
          <div className="container">
          <FormControl component="fieldset">
          <FormGroup aria-label="position" row>
          <FormControlLabel
            value="top"
            control={<Switch1 color ='primary' onChange ={this.update} />}
            label="Dark Mode"
            labelPlacement="start"
          />
          </FormGroup>
          </FormControl>
          <Switch>
            <Route exact path ="/" component={home}/>
            <Route exact path ="/login" component={login}/>
            <Route exact path ="/signup" component={signup}/>
          </Switch>
          </div>
        </Router>
        </div>
      </MuiThemeProvider>
    );
  }  
}

export default App
