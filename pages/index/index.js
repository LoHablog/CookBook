
//获取应用实例
var app = getApp();
Page({
  data: {
    img_list: ['../images/ajlog.jpg'],
    picList:[
      { id: 4, unique: 'unique_4', url:'../images/3.1.jpg',message:"无兄弟不篮球"  },
      { id: 3, unique: 'unique_3', url: '../images/3.png', message: "无兄弟不篮球" },
      { id: 2, unique: 'unique_2', url: '../images/4.png', message: "无兄弟不篮球"  },
      { id: 1, unique: 'unique_1', url: '../images/2.jpg', message: "无兄弟不篮球"  },
      { id: 0, unique: 'unique_0', url: '../images/7.png', message: "无兄弟不篮球" },
    ],
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }]
  },
  
  //模板消息推送
  FormSubmit:function(e){
    console.log(e);
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
