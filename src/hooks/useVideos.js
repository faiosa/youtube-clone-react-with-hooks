import { useState, useEffect } from 'react';
import youtube from '../apis/youtube';

const useVideos = defaultSearchTerm => {
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);

    const search = async term => {
        const response = await youtube.get('/search', {
            params: {
                part: 'snippet',
                q: term,
                key: 'AIzaSyAy0XeOmDfuV6GNXYgKvzJKEKY9ipmo-4I',
                maxResults: 5,
                type: 'video',
            },
        });

        setVideos(response.data.items);
    };

    return [videos, search];
};

export default useVideos;
