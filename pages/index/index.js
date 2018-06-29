
//获取应用实例
var app = getApp();
Page({
  data: {
    array: ['春天', '夏天', '秋天', '冬天'],
    img_list: ['../images/22.jpg'],
    picList:[
      { id: 5, unique: 'unique_5' },
      { id: 4, unique: 'unique_4' },
      { id: 3, unique: 'unique_3' }
   ]

  },
  
  //模板消息推送
  FormSubmit:function(e){
      let fromId=event.detail.fromId;
      console.log('from发生了推送事件，推送码为：'+fromId);
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
