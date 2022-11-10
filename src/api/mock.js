import Mock from 'mockjs'
import homeApi from '@/api/mockServeData/home.js'

//定义mock请求拦截,get方法可以省略'get'
// Mock.mock('/api/home/getData','get',function(){
//   //拦截到请求后的处理逻辑
//   console.log('拦截到了');
//   return [

//   ]
// })
Mock.mock('/api/home/getData','get',homeApi.getStatisticalData)