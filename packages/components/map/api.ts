import axios from 'axios';
import { isProd } from '@dl-element/utils';

const prefix = isProd ? '' : '/dl-mapData';

export function getMpData() {
	return axios.get(`${prefix}/json/province/jiangsu.json`);
}
