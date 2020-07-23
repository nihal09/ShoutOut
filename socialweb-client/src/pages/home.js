import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import Scream from '../components/Scream'
import { keys } from '@material-ui/core/styles/createBreakpoints';

export class home extends Component {
    state={
        screams:null
    }
    componentDidMount(){
        axios.get('/screams')
        .then(res => {
            this.setState({
                screams:res.data
            })
        })
        .catch(err => console.log(err))
    }
    render() {
        let recentScreams =this.state.screams ? (this.state.screams.map(scream =><Scream key={scream.screamId } scream={scream}/>))
        :(<span>Loading..</span>)
        return (
            <Grid container spacing ={2} > 
                <Grid item xs={12} sm={8}>
                    <p>{recentScreams}</p>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <p>coming soon..</p>
                </Grid>
            </Grid>
            
        )
    }
}

export default home
