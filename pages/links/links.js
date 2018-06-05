// pages/links/links.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    resStr: '',
    array: ['实时', '历史', '询汇'],
    objectArray: [
      {
        id: 0,
        name: '实时',
        lbl: '#'
      },
      {
        id: 1,
        name: '历史',
        lbl: '&'
      },
      {
        id: 2,
        name: '询汇',
        lbl: '$'
      }
    ],
    index: 0
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value,
    })
  },
  formSubmit: function (e) {
    let data = this.data
    console.log('表单提交，携带值为', data)
    let qType = data.objectArray[data.index].lbl
    let qText = e.detail.value.input
    let q = 
    {
      "qType": qType,
      "qText": qText
    }
    console.log('请求参数为', q)
    this.setData({
      resStr: this.getJson(q),
    })
  },

  getJson: function (q) {
    let ret = ''
    try{
      // todo
      ret = JSON.stringify(q)
    }finally{}
    return ret
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})