import React from 'react';

import VideoListItem from './video-list-item';

const VideoList = ({videos, onVideoSelect}) => {

    let videoItems = videos.map((video) => {
        return <VideoListItem key={video.etag} video={video} onVideoSelect={onVideoSelect} />
    });

    return (
        <div className="video-list col-md-4">
            <ul className="list-group">
                { videoItems }
            </ul>
        </div>
    ); 

};

export default VideoList;