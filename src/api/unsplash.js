import axios from 'axios';

export default axios.create({
baseURL: 'https://api.unsplash.com',
headers: {
				Authorization:
				 'Client-ID 1e0364e537441b80b24108753e05638585488d433c2e60b05d62bc5b9bd7d4f5'
			}
});