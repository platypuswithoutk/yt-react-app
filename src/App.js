import React from 'react';
import { Grid } from '@material-ui/core';
//import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetail';

class App extends React.Component {
    render() {
        return(
            <Grid justify="center" container spacing={16}>
                <Grid item xs={12}>
                    <Grid container spacink={16}>
                        <Grid item xs={12}>
                            <SearchBar />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails />
                        </Grid>
                        <Grid item xs={4}></Grid>
                    </Grid>   
                </Grid>
            </Grid>
        )
    }
}

export default App;