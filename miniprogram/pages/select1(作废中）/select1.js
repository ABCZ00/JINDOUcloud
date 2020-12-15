Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
  },
  formSubmit(e) {
    // let obj = {
    //   huabei: [1,2,3]
    // }
    // console.log(obj.huabei)
    console.log(e)
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
    this.inquire(e.detail.value)
  },
  inquire(e){
    console.log(e)
    let that = this;
      wx.request({
        type: 'post',
        dataType: 'json',
        url: 'https://route.showapi.com/268-1',
        data:{
          "showapi_appid": '453458', //这里需要改成自己的appid
          "showapi_sign": 'c01723a63894416383f4d6a1c37a7fd5',  //这里需要改成自己的应用的密钥secret
          "keyword":e.input,
          "proId":"",
          "cityId":"",
          "areaId":"",
          "page":""
        },
        success: function(result) {
          console.log(result.data.showapi_res_body.pagebean.contentlist) 
          that.setData({
            name: result.data.showapi_res_body.pagebean.contentlist[0].name
          })
      }
      })
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