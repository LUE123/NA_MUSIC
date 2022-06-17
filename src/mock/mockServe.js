//引入mock
import Mock from 'mockjs'

//JSON数据
import banner from './banner.json'

//mock数据
Mock.mock("/mock/banner", { code: 200, data: banner })

//在main.js中引入