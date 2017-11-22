import React, {Component} from 'react';

const VideoListItem = ({video}) => {
    // const video = props.video; <= { video } in the params is syntactic sugar for this.
    return <li>Video: {video.etag}</li>;    
}

export default VideoListItem;
