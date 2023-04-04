import axios from 'axios';

const http = axios.create({
    baseURL: '/api',
    timeout: 10000
});

// 请求拦截器
axios.interceptors.request.use(function(config) {

},function(err) {

})

// 响应拦截器
axios.interceptors.response.use(function(config) {

},function(err) {
    
})

export default http;