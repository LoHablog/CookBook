//获取应用实例
var app = getApp();
Page({
  data: {
    img_list: ['../images/meal.png',
      '../images/sour.jpg',
      '../images/sweet.jpg',
      '../images/hot.jpg'
    ],
    animationData: {},
    collectionStatus:true
  },
  onCollectionTap:function(e){
    console.log(this.data);
    if (this.data.collectionStatus) 
    {
      this.setData({ collectionStatus: false })
    }
    else
    {
      this.setData({ collectionStatus: true })
    }
  }
})  