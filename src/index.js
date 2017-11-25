import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCawtvv4TDwVdZx10MmnAIKFS9rQYsStyI';

class App extends Component {
    
    constructor(props) {
	super(props);

	this.state = {videos: []};
	this.videoSearch('Karuta - Ichiban no Takaramono');
    }

    videoSearch(term) {
	YTSearch({key: API_KEY, term: term}, (data) => {
	    this.setState({ videos: data,
			    selectedVideo: data[0]
			  });
	});
	
    }

    render() {
	return (
	    <div>
	      <SearchBar onTermChange={(term) => {this.videoSearch(term)}} />
		<VideoDetail video={this.state.selectedVideo} />
		<VideoList
		  onVideoSelect={ (selectedVideo) => this.setState({selectedVideo}) }
		  videos={this.state.videos}
		  />
	    </div>
	);
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
