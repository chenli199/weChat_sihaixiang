// pages/start/start.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getSetting({
      success(res){
        if(res.authSetting['scope.userInfo']){
          wx.getUserInfo({
            success:function(res){
              console.log("===========")
              console.log(res.userInfo)
              wx.switchTab({
                url: '/pages/my/my'
              })
            }
          })
        }
      }
    })
  },
  bindGetUserInfo(e){
    console.log(e.detail.userInfo)
    var nickname = e.detail.userInfo.nickName;
    var avatarUrl = e.detail.userInfo.avatarUrl;
    var shxuserinfo = {
      nickname:nickname,
      avatarUrl:avatarUrl
    }
    wx.setStorage({
      key:"user",
      data:shxuserinfo
    })
    //微信登录
    wx.login({
      success(res) {
        if (res.code) {
          console.log(res.code)
          //发起网络请求
          wx.request({
            url: 'http://localhost:8080/shx/shx/login',
            data: {
              code: res.code,
              nickname:nickname,
              headerImg:avatarUrl
            },
            success(){
              console.log("result")
              console.log(result)

              wx.setStorage({
                key: "openid",
                data: result.data.openid
              })
              wx.setStorage({
                key: "session_key",
                data: result.data.sessionkey
              })
            }
          })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    }),
      wx.switchTab({
        url: '/pages/my/my'
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