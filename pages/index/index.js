
//获取应用实例
var app = getApp();
Page({
  data: {
    array: ['春天', '夏天', '秋天', '冬天'],
    multiIndex: [0, 0, 0],
  }, 
  //点击选择不同的味道事件
  bindPickerChange: function (e) {
    this.setData({
      index: e.detail.value,
      if(index=0)
      {
        back_color:"#90EE90"
      },
      if(index = 1) {
        back_color: "#FFEBCD"
      },
      if(index = 2) {
        back_color: "#FFF68F"
      },
      if(index = 3) {
        back_color: "	#FFFAFA"
      }
    });
  },
  //点击跳转到详情页面事件
  Click_details:function(event){
    wx.navigateTo({
      url: '/pages/details/details',
    })
  },
  Click_way:function(e){
     wx.navigateTo({
       url: '/pages/innomoodWay/innomoodWay',
     })
  }
})  
