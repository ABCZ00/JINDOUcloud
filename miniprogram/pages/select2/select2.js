Page({

  /**
   * 页面的初始数据
   */
  data: {
    customer:[],
    list: [],
    collect:[],
    history:[],
    China:[        //将中国分为七个部分
    {name:"华北地区",rank:0,pic:"https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1621617615,593195427&fm=26&gp=0.jpg"},
    {name:"东北地区",rank:1,pic:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00785-2036.jpg"},
    {name:"华东地区",rank:2,pic:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00037-3367.jpg"},
    {name:"华中地区",rank:3,pic:"https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00704-2789.jpg"},
    {name:"华南地区",rank:4,pic:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=3337538330,1776433957&fm=26&gp=0.jpg"},
    {name:"西南地区",rank:5,pic:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3169473347,3526774530&fm=26&gp=0.jpg"},
    {name:"西北地区",rank:6,pic:"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1269341302,2497402951&fm=26&gp=0.jpg"}],
    area:[[3,27,10,23,19],[12,15,18],[25,16,31,2,17,4,22,35],[11,13,14],[6,7,9,33,34],[26,32,8,30,28],[24,5,29,21,20]]     //写出每个区域各省的省号
  },
  myreset:function(e){
    this.setData({
      history:this.data.history.concat(this.data.list),
      list:[],
      customer:[],
      collect:[],
    })
    var app=getApp();
    app.globalData.collected=[],
    app.globalData.allhistory=this.data.history;
  },
  mycheck:function(e){
    this.setData({
      customer:[]
    })
    for(var i=0;i<e.detail.value.length;i++)
    {
      this.setData({
        customer:this.data.customer.concat(this.data.area[e.detail.value[i]])   //根据用户选择调用省号数组
      })
    }
  },
  mysubmit:function(e){
    this.setData({
      list:[],
    })
    this.intoAPI(this.data.customer)   //调用api
  },
  intoAPI:function(e){
    let that=this;
    for(let i=0;i<e.length;i++)
    {
      this.startAPI(e[i])
    }
  },

  startAPI:function(e){
    let that=this;
    wx.request({
      type: 'post',
      url: 'http://route.showapi.com/268-1',
      dataType: 'json',
      data: {
        "showapi_appid": '453458', //这里需要改成自己的appid
        "showapi_sign": 'c01723a63894416383f4d6a1c37a7fd5', //这里需要改成自己的应用的密钥secret
        "keyword":"",
        "proId":e,    //用省号调用api
        "cityId":"",
        "areaId":"",
        "page":""
      },
      success: function(result) {
        console.log(result.data.showapi_res_body.pagebean.contentlist)
        var i = Math.floor(Math.random() * 20)
        // console.log(i)
        that.setData({
          list: that.data.list.concat(result.data.showapi_res_body.pagebean.contentlist[i]),
        })
        for(let i=0;i<that.data.list.length;i++)
        {
          if(that.data.list[i].collected==null)
          {
            that.data.list[i].collected=false;      //为各个景点对象设置收藏属性
            that.data.list[i].Picture="https://hbimg.huabanimg.com/66c75801238fcde5ede6af9e8641c731ee33f5071888-l40P8J_fw658/format/webp";
          }
        }
        var app=getApp();
        app.globalData.list=that.data.list     //上传全局变量
    }
        })
  },
// collect:function(e){
//   this.data.list[e.target.dataset.index].collected=!(this.data.list[e.target.dataset.index].collected)
//   this.setData({
//   collect:this.data.list
// })
//   var app=getApp();
//   app.globalData.collected=this.data.collect;
// },
toSelect4:function(e){
  wx.navigateTo({
    url: '/pages/select4/select4',
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
    this.setData({
      history:this.data.history.concat(this.data.list),
      list:[],
      customer:[],
      collect:[],
    })
    var app=getApp();
    app.globalData.collected=[],
    app.globalData.allhistory=this.data.history;     //每次退出页面时清空数据并保存历史数据
  
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