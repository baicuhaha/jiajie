// config.js
const { ENV } = require('./env')
let BASEURL

switch (ENV) {
  case 'production':
    BASEURL = ''
    break
  case 'test':
    BASEURL = 'http://139.198.188.45:5155'
    break
  default:
    BASEURL = ''
    break
}
module.exports = {
  BASEURL,// 项目接口地址，支持多域名
}