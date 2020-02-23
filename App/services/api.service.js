import axios from 'axios';

export default axios.create({
	baseURL: 'http://172.17.0.1:4000'
});
