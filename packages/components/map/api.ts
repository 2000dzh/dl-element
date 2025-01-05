import axios from 'axios';
import { defaultRequestPrefix } from '@dl-element/utils';

export function getMpData(url: string) {
	return axios.get(`${defaultRequestPrefix}${url}`);
}
