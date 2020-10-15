import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetail';

class App extends React.Component {

    state = {
        video: [],
        selectedVideo: null,
    }

    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',    
                maxResult: 5,
                key: 'AIzaSyA3A8f7ow0V6nR5ZYmUstnHyS0V1MQvloQ',
                q: searchTerm,
            }
        });
        this.setState({videos: response.data.items, selectedVideo: response.data.items[0]});
    }

    render() {
        const { selectedVideo } = this.state;
        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacink={10}>
                        <Grid item xs={12}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}></Grid>
                    </Grid>   
                </Grid>
            </Grid>
        )
    }
}

export default App;