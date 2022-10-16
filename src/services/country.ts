import { Url } from '@constants';
import axios from 'axios';

export const axiosCountry = axios.create({
	baseURL: Url.COUNTRY,
	headers: {
		'Content-Type': 'application/json',
	},
});
