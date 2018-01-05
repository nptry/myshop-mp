const util = require('../../utils/util.js');
const api = require('../../config/api.js');
const user = require('../../services/user.js');

//获取应用实例
const app = getApp()
Page({
  data: {
    newGoods: [],
    hotGoods: [],
    topics: [],
    tireBrands: [
      { new_pic_url: '/static/images/timg.jpeg', name: '米其林', intro: '送胎压监测' },
      { new_pic_url: '/static/images/timg-2.jpeg', name: '德国马牌', intro: '送胎压监测' },
      { new_pic_url: '/static/images/timg-3.jpeg', name: '邓禄普', intro: '送胎压监测' },
      { new_pic_url: '/static/images/timg-4.jpeg', name: '固特异', intro: '送胎压监测' }
    ],
    maintainBrands: [],
    floorGoods: [],
    banner: [],
    channel: [
      { icon_url: '/static/images/detail_kefu.png', name: '四轮定位' },
      { icon_url: '/static/images/detail_kefu.png', name: '安全驾驶' },
      { icon_url: '/static/images/detail_kefu.png', name: '美容清洗' },
      { icon_url: '/static/images/detail_kefu.png', name: '装饰改装' }]
  },
  onShareAppMessage: function () {
    return {
      title: '张氏轮胎',
      desc: '平昌养车',
      path: '/pages/index/index'
    }
  },

  getIndexData: function () {
    let that = this;
    util.request(api.ApiRootUrl + 'home_page').then(function (res) {
      that.setData({
        // newGoods: res.data.newGoodsList,
        // hotGoods: res.data.hotGoodsList,
        // topics: res.data.topicList,
        // brand: res.data.brandList,
        // floorGoods: res.data.categoryList,
        banner: res.banners,
        tireBrands: res.tire_brands,
        clearBrands: res.clear_brands,
        // channel: res.data.channel
      });
      console.log("banner..", that.data.banner)
      console.log("tireBrands...", that.data.tireBrands)
    });
  },
  onLoad: function (options) {
    this.getIndexData();
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
})