Page({
  data: {
    selectType: 'all',
    list:[1],
    parameterList:[
      {
        label: ""
       },
     {
      label: "球镜"
     },
      {
      label: "柱镜"
     },{
      label: "轴位"
     },{
      label: "ADD"
     },{
      label: "瞳距"
     },{
      label: "数量"
     }
    ],
    parameterRValue:[
      "R",
      "12.22",
      "1",
      "2",
      "3",
      "4",
      '5'
    ],
    parameterLValue:[
      "L",
      "12.22",
      "1",
      "2",
      "3",
      "4",
      '5'
    ]
  },
  onLoad() {

  },
  selectBtnType(data) {
    let  type = data.target.dataset.index
    console.log("type------>",type)
    this.setData({
      "selectType":type
    })
  },
  onReachBottom() {
    console.log("上拉")
  },
  onPullDownRefresh() {

  }
})