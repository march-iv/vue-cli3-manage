import axios from "axios"
import qs from "qs"
import { Message } from 'view-design'

let axiosInstance = axios.create({
	timeout: 1000 * 30,
	withCredentials: false,
	baseURL: process.env.VUE_APP_BASE_API,
})

// 请求拦截器
axiosInstance.interceptors.request.use(
	config => {
		return config
	},
	error => {
		return Promise.reject(error);
	}
)

// 响应拦截器
axiosInstance.interceptors.response.use(
	response => {},
	error => {}
)

export default axiosInstance