import React from 'react';

import VideoListItem from './video_list_item';

const VideoList = (props) => {

    const videoItems = props.videos.map( (video) => {
	return (
	    <VideoListItem
	    key={video.etag}
	    video={video}
            />
	);
	    // For indexing purposes, React likes each item in a rendered list to have a unique identifier (`key` is what we're using here). In this example we're using the etag from the YouTube API (YouTube's unique identifer for a video) as the key.
    });
    return(
	    <ul className='col-md-4 list-group'>
	      {videoItems}
	    </ul>
	    
    );
}

export default VideoList;
