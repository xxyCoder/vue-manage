import Mock from 'mockjs';
import homeApi from './mockServeData/home.js'
import permission from './mockServeData/permission.js';

// 定义mock拦截器
Mock.mock('/api/home/getData',homeApi.getStatiscalData);

Mock.mock(/api\/permission\/getMenu/,permission.getMenu);