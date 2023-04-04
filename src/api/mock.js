import Mock from 'mockjs';
import homeApi from './mockServeData/home.js'

// 定义mock拦截器
Mock.mock('/api/home/getData',homeApi.getStatiscalData)