import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyCawtvv4TDwVdZx10MmnAIKFS9rQYsStyI';

class App extends Component {

    constructor(props) {
	super(props);

	this.state = {videos: []};
	YTSearch({key: API_KEY, term: 'angel beats'}, (data) => {
	    this.setState({ videos: data });
	});
    }

    render() {
	return (
	    <div>
	      <SearchBar />
	      <VideoList videos={this.state.videos} />
	    </div>
	);
    }
}


ReactDOM.render(<App />, document.querySelector('.container'));
