import http from '../http.js'
import qs from 'qs'

export default {
	testGet (params, headers = {}) {
		return http.get('https://api.apiopen.top/getWangYiNews', {
			params: params,
			headers,
			responseType: 'json'
		})
	}
}