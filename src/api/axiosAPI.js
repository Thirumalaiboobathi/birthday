import { DOMAIN } from '../config/appConfig';

import axios from 'axios';

const axiosAPI = axios.create({ baseURL: DOMAIN });

export const axiosCookiesAPI = axios.create({ baseURL: `${DOMAIN}doctor/` })

export const axiosAuthAPI = axios.create({ baseURL: DOMAIN });

export default axiosAPI;