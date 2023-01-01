import request from "../request/index";

const registerApi = {
  businessLicense: function (data) {
    return request({
      url: '/ocr/business-license',
      method: 'POST',
      data
    })
  },

}
export default registerApi
