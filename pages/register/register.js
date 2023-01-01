import registerApi from '../../api/register'
Page({
  data: {
    areaCode:null,
    storeName:'',
    address:"",
    password:"",
    confirmPassWord:"",
    business:"",
    legalPerson:"",
    phone:"",
    sms:"",
    validation:{
      storeNameErr:'',
      areaCodeErr:'',
      addressErr:"",
      passwordErr:"",
      confirmPassWordErr:"",
      businessErr:"",
      legalPersonErr:"",
      phoneErr:"",
      smsErr:""
    },
    areaShow:false,
    areaList:{
      province_list: {
        110000: '北京市',
        120000: '天津市',
      },
      city_list: {
        110100: '北京市',
        120100: '天津市',
      },
      county_list: {
        110101: '东城区',
        110102: '西城区',
        // ....
      },
    },
    headFileList:[

    ],
    backFileList:[]
    
  },
  onLoad() {

  },
  afterRead() {

  },
  beforeRead(event) {
    const { file, callback } = event.detail;
    callback(file.type === 'image');
  },
  onClose() {
    console.log("onClose-")
    this.setData({areaShow:false})
  },
  openAreaShow()  {
    console.log("___openAreaShow____-")
    this.setData({areaShow:true})
  },
  areaConfirm(val) {
    this.setData({areaShow:false})
    console.log("this.data.",val.detail)
  },
  //上传成功回调
  afterHeadRead(event) {
    const { file } = event.detail;
    // let formData = new FormData()
    // formData.append('file', file)
    // registerApi.businessLicense().then(()=>{

    // })

    wx.uploadFile({
      url: 'http://139.198.188.45:5155/ocr/business-license', // 仅为示例，非真实的接口地址
      filePath: file.url,
      name: 'file',
      success(res) {
        // 上传完成需要更新 fileList
        const { fileList = [] } = this.data;
        fileList.push({ ...file, url: res.data });
        this.setData({ headFileList:fileList });
      },
    });
  }
})