import axios from 'axios';

const KEY = 'AIzaSyAy0XeOmDfuV6GNXYgKvzJKEKY9ipmo-4I';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		maxResults: 5,
		key: KEY
	}
});
