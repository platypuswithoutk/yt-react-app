import React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import '../style/VideoItemStyle.css'

const VideoItem = ({video, onVideoSelect }) => {
    return(
        <Grid item xs={12}>
            <Paper className="video-item-paper" onClick={() => onVideoSelect(video)}>
                <img className="video-item-img" alt="images" src={video.snippet.thumbnails.medium.url}/>
                <Typography variant="subtitle1"><b>{video.snippet.title}</b></Typography>
            </Paper>

        </Grid>
    )
}



export default VideoItem; 