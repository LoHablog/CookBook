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
  },
  //单机切换动画 
  clickthis: function (e) {
    var that = this;
    var img_list = this.data.img_list;
    var img_1 = this.data.img_list[0];
    img_list.splice(0, 1)
    img_list.push(img_1)
    this.setData({
      img_list: img_list
    })
    var animation = wx.createAnimation({
      duration: 300,
      timingFunction: 'cubic-bezier(.8,.2,.1,0.8)',
    });
    this.animation = animation;
    this.animation.translateY(-420).rotate(-5).translateX(0).step();
    this.animation.translateY(0).translateX(0).rotate(0).step();
    this.setData({
      animationData: this.animation.export()
    });
    setTimeout(function () {
      that.setData({
        animationData: {}
      });
    }, 350);
  }
})  