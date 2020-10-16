import React from 'react';
import { Grid } from '@material-ui/core';
import youtube from './api/youtube';
import SearchBar from './components/SearchBar';
import VideoDetails from './components/VideoDetail';
import VideoList from './components/VideoList'; 

class App extends React.Component {

    state = {
        videos: [],
        selectedVideo: null,
    }

    componentDidMount() {
        this.handleSubmit('CZYM JEST PROGRAMOWANIE OBIEKTOWE?')
    }

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video})
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
        const { selectedVideo, videos } = this.state;
        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={8}>
                            <SearchBar onFormSubmit={this.handleSubmit}/>
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetails video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect}/>
                        </Grid>
                    </Grid>   
                </Grid>
            </Grid>
        )
    }
}

export default App;