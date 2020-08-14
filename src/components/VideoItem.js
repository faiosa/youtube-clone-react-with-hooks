import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video, onVideoSelect }) => {
	return (
		<div onClick={() => onVideoSelect(video)} className='video-item item'>
			<img className='ui image' alt='battle safe' src={video.snippet.thumbnails.medium.url} />
			<div className='content'>
				<div className='header' href='//'>
					{video.snippet.title}
				</div>
			</div>
		</div>
	);
};

export default VideoItem;
