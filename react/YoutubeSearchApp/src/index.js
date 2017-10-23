import _ from 'lodash';
import React, { Component }  from 'react';
import ReactDOM from 'react-dom';

import YTSearch from 'youtube-api-search';

import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';

const GOOGLE_API_KEY = 'AIzaSyBvSxrA8b9sk9ZA3RgvZjyvBARf3mNBu54';

class App extends Component {
    
    constructor(props){  
        super(props)
        this.state = { 
            videos: [],
            selectedVideo: null
        };

        this.searchVideos('Dragon Ball Z')

    }

    searchVideos(term){
        YTSearch({ key: GOOGLE_API_KEY, term: term}, (videos) => {
            this.setState({ 
                videos: videos, 
                selectedVideo: videos[0]
            });
        });
    }
    
    render(){

        const searchVideos = _.debounce( (term) => { this.searchVideos(term) }, 500 );

        return (
            <div>
                <SearchBar onSearchChange={searchVideos} />
                <div className="row">
                    <VideoDetail video={this.state.selectedVideo}/>
                    <VideoList videos={this.state.videos} onVideoSelect={ (selectedVideo) => this.setState({ selectedVideo }) } />
                </div>
            </div>
        );
    }

}

ReactDOM.render(<App />, document.querySelector('.container'));
