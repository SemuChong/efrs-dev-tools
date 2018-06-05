//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    contacts: [
      { name: '顾丹铭', phoneNo: '13564227784' },
      { name: '曹羽', phoneNo: '18964699357' },
      { name: '吴冲冲', phoneNo: '13774266374' },
      { name: '夏敏', phoneNo: '18516523026' },
      { name: '李恩典', phoneNo: '13526618949' },
      { name: '白鹏飞', phoneNo: '13061818086' },
      { name: '刘广立', phoneNo: '18016386617' },
      { name: '林苏燕', phoneNo: '17621234268' },
      { name: '冯晓波', phoneNo: '18101819977' },
      { name: '黄肖滢', phoneNo: '18502193018' },
      { name: '章文辉', phoneNo: '13122231223' },
      { name: '施文敬', phoneNo: '17621942010' },
      { name: '孙海龙', phoneNo: '15237411727' },
      { name: '李展', phoneNo: '13167008520' },
      { name: '陆景丽', phoneNo: '18896540546' }
    ],
    scrollTop: 100
  },
  onLoad: function () {

  },
  call: function (e) {
    wx.makePhoneCall({
      phoneNumber: e.currentTarget.id,
    })
  }
})
