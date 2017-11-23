import React, {Component} from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // const video = props.video; <= { video } in the params is syntactic sugar for this.
    console.log("HERE: ", onVideoSelect);
    
    // Data about the video:
    const imageUrl = video.snippet.thumbnails.default.url;
    
    
    return (
	<li onClick={ () => onVideoSelect(video) } className="list-group-item">
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
