// pages/select4/select4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    collect:[],
  },
  collect:function(e){    //收藏按钮功能的实现
    this.data.list[e.target.dataset.index].collected=!(this.data.list[e.target.dataset.index].collected)    //按一次按钮取反一次
    if(this.data.list[e.target.dataset.index].collected==true){     //根据收藏属性决定收藏按钮的样式
        this.data.list[e.target.dataset.index].Picture="https://hbimg.huabanimg.com/9382b9fae3d745642547b4282ebc5cc0791b73dd1141-ucknfS_fw658/format/webp";    
    }
    else{
        this.data.list[e.target.dataset.index].Picture="https://hbimg.huabanimg.com/66c75801238fcde5ede6af9e8641c731ee33f5071888-l40P8J_fw658/format/webp"
    }
    this.setData({
    collect:this.data.list
    
  })
    var app=getApp();
    app.globalData.collected=this.data.collect;    //上传全局变量，使其能在收藏页面被加载
    var app=getApp();
    this.setData({
      list:app.globalData.list
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
    var app=getApp();
    this.setData({
      list:app.globalData.list
    })
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