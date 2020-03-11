// pages/like/like.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:0,
    list:[
      {
        img:'/img/12.png',
        hot:19999,
        name:'盛夏海鲜家宴',
        price:4999
      }
    ]

  },
  //清空
  del:function(){
    console.log("======")
    var that = this;
    that.setData({
      num:0,
      list:[]
    })
  },
  cancel:function(e){
    console.log("------")
    console.log(e.currentTarget.dataset.banquetId)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    that.setData({
      num:that.data.list.length
    })
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