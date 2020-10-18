import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import '../style/VideoDetailsStyle.css';

const VideoDetail = ({video}) => {

    if(!video) return <div>Loading...</div>
    console.log(video)
    
    const VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
    return(
        <React.Fragment>
            <Paper elevation={6} className="main-video">
                <iframe frameBorder="0" height="100%" width="100%" title="Video Player" src={VideoSrc} />
            </Paper>
            <Paper elevation={6} style={{padding:'15px'}}>
                <Typography variant="h4">{video.snippet.title} - {video.snippet.channelTitle}</Typography>
                <Typography variant="subtitle1">{video.snippet.chanelTitle}</Typography>
                <Typography variant="subtitle2">{video.snippet.description}</Typography>
            </Paper>
        </React.Fragment>
        
    )
}

export default VideoDetail;