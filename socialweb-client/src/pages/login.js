import React, { Component } from 'react'
import withStyles from '@material-ui/core/styles/withStyles'
import PropTypes from 'prop-types'
import ShoutOut from '../images/ShoutOut.jpg'
import Grid from '@material-ui/core/Grid'
import { Typography } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const styles = {
form : {
    textAlign : 'center'
},
image : {
    margin : '20 7px 20 7px'
},
pageTitle :{
    margin : '20 px auto 20px auto'
},
textField: {
    margin : '10px auto 10px auto'
},
button:{
    marginTop : 20
}
}

class login extends Component {
    constructor(){
        super();
        this.state = {
            email : '',
            password: '',
            loading :false,
            errors : {}
        }
    }

    handleSubmit = (event) => {
        console.log('hi')
    }

    handleChange = (event) =>{
        this.setState({
            [event.target.name] :event.target.value
        })
    }

    render() {
        const { classes } = this.props;
        return (
            <Grid container className ={classes.form}>
                <Grid item sm/>
                <Grid item sm>
                    <Typography variant ='h3' className ={classes.pageTitle}>
                        Login
                        <img src ={ShoutOut} alt="shout" className ={classes.image}/>
                    </Typography>
                    <form noValidate onSubmit = {this.handleSubmit}></form>
                        <TextField id ='email' name ='email' label = 'Email' type = 'email' className={classes.textField}
                            value={this.state.email} onChange ={this.handleChange} fullWidth/>
                        <TextField id ='password' name ='password' label = 'Password' type = 'password' className={classes.textField}
                            value={this.state.password} onChange ={this.handleChange} fullWidth/>
                        <Button type ='submit' variant="contained" color="primary" className={classes.button}>
                        Login
                        </Button>
                </Grid>
                <Grid item sm/>
            </Grid>
        );
    }
}

login.propTypes = {
    classes : PropTypes.object.isRequired
}

export default withStyles(styles)(login)
