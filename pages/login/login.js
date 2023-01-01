
Page({
  data: {
    code:null,
    password:null,
    validation:{
      codeErr:null,
      passwordErr:null
    }, 
    checked:false,
  },
  // 事件处理函数
  bindViewTap() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad() {
   
  },
  onChange(type) {

  },
  /**
   *  复选框
   */
  onChangeChecked(event) {
    this.setData({
      checked: event.detail,
    })
  },
  /**
   * 忘记密码
   */
  btnPasswordClick() {

  },
  btnLoginClick() {
    console.log("---",this.data)
    if(!this.data.code && !this.data.password) {
        this.setData({
          'validation.codeErr':'请输入客户代码',
          'validation.passwordErr':'请输入密码',
        })
      return
    }else if(!this.data.code && this.data.password) {
      this.setData({
        'validation.codeErr':'请输入客户代码',
        'validation.passwordErr':'',
      })
      return
    }else if(this.data.code && !this.data.password) {
      this.setData({
        'validation.codeErr':'',
        'validation.passwordErr':'请输入密码',
      })
      return
    }else {
      this.setData({
        'validation.codeErr':'',
        'validation.passwordErr':'',
      })
    }

    wx.switchTab({
      url: '../order/order'
    })

  },
  btnRegisterClick() {

  }

  // btnClick() {
  //   this.setData({
  //     motto:"asdasd"
  //   })
  //   console.log("点击---btnClick--")
  // }
})
