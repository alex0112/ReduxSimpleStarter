import React, {Component} from 'react';

const VideoListItem = ({video}) => {
    // const video = props.video; <= { video } in the params is syntactic sugar for this.

    // Data about the video:
    const imageUrl = video.snippet.thumbnails.default.url;
    
    
    return (
	<li className="list-group-item">
	  <div className="list-group-item">
	    <div className="media-left">
	      <img src={imageUrl} className="media-object"/>
	    </div>

	    <div className="media-body">
	      <div className="media-heading">{video.snippet.title}</div>
	    </div>
	  </div>
	</li>
    );
};

export default VideoListItem;
