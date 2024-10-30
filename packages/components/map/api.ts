import axios from 'axios';

export function getMpData() {
	return axios.get('/dl-mapData/json/province/jiangsu.json');
}
